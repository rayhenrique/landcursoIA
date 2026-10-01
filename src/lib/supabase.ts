import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/supabase'

// Variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validação das credenciais
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '⚠️ Supabase não configurado. Crie um arquivo .env.local com VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY'
  )
}

// Criar cliente Supabase tipado
export const supabase = createClient<Database>(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: false, // Não precisamos de autenticação para waitlist
    },
  }
)

// Verificar se Supabase está configurado
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)
