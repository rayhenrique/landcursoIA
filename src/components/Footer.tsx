import { motion } from 'framer-motion';
import { ArrowRight, Zap, Linkedin, Loader2, AlertCircle } from 'lucide-react';
import { useWaitlist } from '../hooks/useWaitlist';

export default function Footer() {
  const { email, setEmail, status, message, handleSubmit } = useWaitlist();

  return (
    <footer className="relative">
      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,112,243,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-50" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Sua próxima grande ideia está a um{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                prompt
              </span>{' '}
              de distância.
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
              Não deixe para depois. Entre na lista de espera e seja um dos primeiros a acessar o método completo.
            </p>

            {/* Email form */}
            <form
              onSubmit={(e) => handleSubmit(e, 'footer_section')}
              className="flex flex-col gap-3 max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  aria-label="Seu endereço de e-mail para lista de espera"
                  disabled={status === 'loading'}
                  className="flex-1 px-4 py-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  aria-label="Entrar na lista de espera"
                  disabled={status === 'loading'}
                  className="glow-button flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : status === 'success' ? (
                    '✓ Confirmado!'
                  ) : (
                    <>
                      Entrar na Lista
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Feedback message */}
              {message && status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400 justify-center"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bottom footer */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-medium text-zinc-600">
                KL Tecnologia
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-zinc-600 text-center">
              © {new Date().getFullYear()} KL Tecnologia. Todos os direitos reservados.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/rayhenrique"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
