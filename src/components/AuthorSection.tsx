import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Award, Briefcase, Cpu } from 'lucide-react';

export default function AuthorSection() {
  return (
    <section className="relative py-24 px-6 bg-[#050505]">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Mentor</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Quem vai guiar sua jornada?
          </h2>
        </motion.div>

        {/* Author card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-sm overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#111] to-black border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="text-4xl font-bold text-zinc-700">RH</div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center border-2 border-black">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-1">Ray Henrique</h3>
                  <p className="text-blue-400 font-medium mb-4">Fundador — KL Tecnologia</p>
                  
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Especialista em conectar negócios à tecnologia. Com anos de experiência no mercado, 
                    Ray desenvolve soluções que transformam a forma como empresas operam. 
                    Agora, sua missão é democratizar o acesso à criação de software, 
                    provando que qualquer pessoa com uma ideia pode tirá-la do papel usando IA.
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-6">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Briefcase className="w-4 h-4" />
                      <span>+10 anos de mercado</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Cpu className="w-4 h-4" />
                      <span>IA aplicada a negócios</span>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/rayhenrique"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil de Ray Henrique no LinkedIn"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors group"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/rayhenrique</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
