import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined
const supabaseAnonKey = supabasePublishableKey ?? (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)

function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  })
}

export const supabase = createSupabaseClient()
