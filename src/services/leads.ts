import { supabase, isSupabaseConfigured } from '../lib/supabase'

export interface WaitlistData {
  email: string
  name?: string
  source?: string
}

export interface WaitlistResponse {
  success: boolean
  message: string
  data?: {
    id: string
    email: string
    created_at: string
  }
  error?: string
}

/**
 * Adiciona um email à lista de espera
 */
export async function addToWaitlist(data: WaitlistData): Promise<WaitlistResponse> {
  // Validar email
  if (!data.email || !isValidEmail(data.email)) {
    return {
      success: false,
      message: 'Email inválido',
      error: 'INVALID_EMAIL',
    }
  }

  // Verificar se Supabase está configurado
  if (!isSupabaseConfigured) {
    console.warn('Supabase não configurado. Simulando adição à waitlist...')
    // Em desenvolvimento sem Supabase, simula sucesso
    return {
      success: true,
      message: 'Email adicionado com sucesso (modo demo)',
      data: {
        id: 'demo-' + Date.now(),
        email: data.email,
        created_at: new Date().toISOString(),
      },
    }
  }

  try {
    // Verificar se email já existe
    const { data: existing, error: checkError } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', data.email)
      .single()

    if (existing) {
      return {
        success: false,
        message: 'Este email já está na lista de espera',
        error: 'EMAIL_EXISTS',
      }
    }

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 = not found (o que é bom - email não existe)
      throw checkError
    }

    // Inserir novo registro
    const { data: inserted, error: insertError } = await supabase
      .from('waitlist')
      .insert({
        email: data.email,
        name: data.name || null,
        source: data.source || 'landing_page',
      })
      .select()
      .single()

    if (insertError) {
      throw insertError
    }

    return {
      success: true,
      message: 'Email adicionado com sucesso!',
      data: {
        id: inserted.id,
        email: inserted.email,
        created_at: inserted.created_at,
      },
    }
  } catch (error) {
    console.error('Erro ao adicionar à waitlist:', error)
    
    // Tratamento de erros específicos
    if (error instanceof Error) {
      if (error.message.includes('duplicate') || error.message.includes('unique')) {
        return {
          success: false,
          message: 'Este email já está na lista de espera',
          error: 'EMAIL_EXISTS',
        }
      }
    }

    return {
      success: false,
      message: 'Erro ao processar sua inscrição. Tente novamente.',
      error: 'DATABASE_ERROR',
    }
  }
}

/**
 * Valida formato de email
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Conta quantos emails estão na waitlist (para social proof)
 */
export async function getWaitlistCount(): Promise<number> {
  if (!isSupabaseConfigured) {
    return 200 // Valor demo
  }

  try {
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Erro ao contar waitlist:', error)
      return 0
    }

    return count || 0
  } catch (error) {
    console.error('Erro ao contar waitlist:', error)
    return 0
  }
}
