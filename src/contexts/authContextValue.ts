import { createContext } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import type { Profile } from '@/types/database'

export interface AuthState {
  user: User | null
  profile: Profile | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string, displayName: string) => Promise<{ error: string | null }>
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthState | null>(null)
