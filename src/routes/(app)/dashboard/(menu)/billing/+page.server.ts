import { redirect, error } from "@sveltejs/kit"
import {
  getOrCreateCustomerId,
  fetchSubscription,
} from "../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({
  locals: { safeGetSession, supabaseServiceRole },
}) => {
  const { session } = await safeGetSession()
  if (!session) {
    throw redirect(303, "/auth")
  }

  try {
    const { error: idError, customerId } = await getOrCreateCustomerId({
      supabaseServiceRole,
      session,
    })
    if (idError || !customerId) {
      console.error("Customer ID error:", idError)
      throw error(500, {
        message: "Error creating or retrieving customer. Please try again later.",
      })
    }

    const {
      primarySubscription,
      hasEverHadSubscription,
      error: fetchErr,
    } = await fetchSubscription({
      customerId,
    })
    if (fetchErr) {
      console.error("Subscription fetch error:", fetchErr)
      throw error(500, {
        message: "Error retrieving subscription information. Please try again later.",
      })
    }

    return {
      isActiveCustomer: !!primarySubscription,
      hasEverHadSubscription,
      currentPlanId: primarySubscription?.appSubscription?.id,
    }
  } catch (e) {
    console.error("Unexpected error in billing page:", e)
    throw error(500, {
      message: "An unexpected error occurred. Please try again later.",
    })
  }
}