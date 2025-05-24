import type { Database } from '$lib/sql/DatabaseDefinitions'
import type { SupabaseClient } from '@supabase/supabase-js'

// Profile operations
export const getProfile = async (supabase: SupabaseClient<Database>, userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) throw error
  return data
}

export const updateProfile = async (
  supabase: SupabaseClient<Database>,
  userId: string,
  updates: Database['public']['Tables']['profiles']['Update']
) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()
  
  if (error) throw error
  return data
}

// Contact request operations
export const createContactRequest = async (
  supabase: SupabaseClient<Database>,
  request: Database['public']['Tables']['contact_requests']['Insert']
) => {
  const { data, error } = await supabase
    .from('contact_requests')
    .insert(request)
    .select()
    .single()
  
  if (error) throw error
  return data
}

// Subscription operations
export const getSubscription = async (
  supabase: SupabaseClient<Database>,
  userId: string
) => {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single()
  
  if (error) throw error
  return data
}

// Stripe customer operations
export const getStripeCustomer = async (
  supabase: SupabaseClient<Database>,
  userId: string
) => {
  const { data, error } = await supabase
    .from('stripe_customers')
    .select('*')
    .eq('user_id', userId)
    .single()
  
  if (error) throw error
  return data
} 