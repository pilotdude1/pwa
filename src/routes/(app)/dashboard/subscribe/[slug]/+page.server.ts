import { redirect, error } from "@sveltejs/kit"
import {
  getOrCreateCustomerId,
  fetchSubscription,
} from "../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"
import { stripe } from "$lib/server/stripe/client"

export const load: PageServerLoad = async ({
  params,
  url,
  locals: { safeGetSession, supabaseServiceRole },
}) => {
  const { session } = await safeGetSession()
  if (!session) {
    throw redirect(303, "/auth/sign_in")
  }

  if (params.slug === "free_plan") {
    // plan with no stripe_price_id. Redirect to dashboard home
    throw redirect(303, "/dashboard")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    session,
  })
  if (idError || !customerId) {
    console.log("idError at Subscribe",idError)
    throw error(500, {
      message: "Unknown error. If issue persists, please contact us.",
    })
  }

  const { primarySubscription } = await fetchSubscription({
    customerId,
  })
  if (primarySubscription) {
    // User already has plan, we shouldn't let them buy another
    throw redirect(303, "/dashboard/billing")
  }

  let checkoutUrl
  try {
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: params.slug,
          quantity: 1,
        },
      ],
      customer: customerId,
      mode: "subscription",
      success_url: `${url.origin}/dashboard`,
      cancel_url: `${url.origin}/dashboard/billing`,
    })
    checkoutUrl = stripeSession.url
  } catch (e) {
    console.log("error",e)
    throw error(
      500,
      "Unknown Error (SSE): If issue persists please contact us.",
    )
  }

  throw redirect(303, checkoutUrl ?? "/pricing")
}
