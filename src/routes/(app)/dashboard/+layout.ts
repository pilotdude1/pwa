import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public"
import { createBrowserClient } from '@supabase/ssr'
import type { Database } from "../../../lib/sql/DatabaseDefinitions"
import { redirect } from "@sveltejs/kit"

export const load = async ({ fetch, data, depends, url }) => {
  depends("supabase:auth")

  const supabase = createBrowserClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const profile: Database["public"]["Tables"]["profiles"]["Row"] | null =
    data.profile

  return { supabase, session, profile }
}

