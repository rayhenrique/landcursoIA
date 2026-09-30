import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import VibeCodingMockup from './VibeCodingMockup';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,112,243,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-medium text-zinc-400">Lista de Espera Aberta</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-white"
            >
              Transforme ideias em{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                software
              </span>{' '}
              usando apenas o português.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed max-w-lg"
            >
              Aprenda a criar, desenvolver e hospedar sistemas completos do zero usando IA. 
              Mesmo sem saber programar. Entre para a lista de espera.
            </motion.p>

            {/* Email form */}
            <motion.form
              id="waitlist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  aria-label="Seu endereço de e-mail"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                aria-label="Garantir minha vaga na lista de espera"
                className="glow-button flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                {submitted ? (
                  '✓ Inscrição Confirmada!'
                ) : (
                  <>
                    Garantir Vaga
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>

            {/* Social proof */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xs text-zinc-600"
            >
              +200 profissionais já na lista de espera • Sem spam, prometemos.
            </motion.p>
          </div>

          {/* Right: Mockup */}
          <div className="lg:pl-8">
            <VibeCodingMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
