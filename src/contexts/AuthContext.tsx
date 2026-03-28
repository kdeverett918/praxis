import { useEffect, useState, useCallback, type ReactNode } from 'react'
import { supabase } from '@/lib/supabase'
import { AuthContext } from '@/contexts/authContextValue'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<import('@supabase/supabase-js').User | null>(null)
  const [profile, setProfile] = useState<import('@/types/database').Profile | null>(null)
  const [session, setSession] = useState<import('@supabase/supabase-js').Session | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProfile = useCallback(async (userId: string) => {
    if (!supabase) return
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single()
    if (data) setProfile(data)
  }, [])

  useEffect(() => {
    if (!supabase) {
      queueMicrotask(() => setLoading(false))
      return
    }

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s)
      setUser(s?.user ?? null)
      if (s?.user) fetchProfile(s.user.id)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
      setUser(s?.user ?? null)
      if (s?.user) fetchProfile(s.user.id)
      else setProfile(null)
    })

    return () => subscription.unsubscribe()
  }, [fetchProfile])

  const signUp = async (email: string, password: string, displayName: string) => {
    if (!supabase) return { error: 'Supabase not configured' }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } },
    })
    return { error: error?.message ?? null }
  }

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { error: 'Supabase not configured' }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error: error?.message ?? null }
  }

  const signOut = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ user, profile, session, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
