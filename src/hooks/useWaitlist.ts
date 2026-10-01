import { useState } from 'react'
import { addToWaitlist, type WaitlistResponse } from '../services/leads'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface UseWaitlistReturn {
  email: string
  setEmail: (email: string) => void
  status: FormStatus
  message: string
  handleSubmit: (e: React.FormEvent, source?: string) => Promise<void>
  reset: () => void
}

/**
 * Hook para gerenciar formulários de waitlist
 */
export function useWaitlist(): UseWaitlistReturn {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent, source: string = 'landing_page') => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Por favor, insira seu email')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response: WaitlistResponse = await addToWaitlist({
        email,
        source,
      })

      if (response.success) {
        setStatus('success')
        setMessage('✓ Inscrição confirmada!')
        setEmail('')
        
        // Reset após 3 segundos
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 3000)
      } else {
        setStatus('error')
        setMessage(response.message)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erro ao processar inscrição. Tente novamente.')
      console.error('Erro no hook useWaitlist:', error)
    }
  }

  const reset = () => {
    setStatus('idle')
    setMessage('')
    setEmail('')
  }

  return {
    email,
    setEmail,
    status,
    message,
    handleSubmit,
    reset,
  }
}
