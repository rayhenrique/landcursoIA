import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            KL Tecnologia
          </span>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
        >
          Entrar na Lista
        </a>
      </div>
    </motion.nav>
  );
}
