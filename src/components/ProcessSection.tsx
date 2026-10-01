import { motion } from 'framer-motion';
import { Lightbulb, MessageSquare, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Pense',
    subtitle: 'Estruture a regra do seu negócio',
    description: 'Defina o que seu software precisa fazer. A lógica de negócio é sua — a IA só precisa entender o quê, não o como.',
    detail: 'Mapas mentais, fluxos de usuário e regras de negócio. Tudo em português.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Dialogue',
    subtitle: 'Use prompts validados para a IA escrever o código',
    description: 'Com prompts estruturados e validados, você guia a IA para gerar código limpo, funcional e pronto para produção.',
    detail: 'Templates de prompts testados em centenas de projetos reais.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Publique',
    subtitle: 'Faça o deploy automático na nuvem',
    description: 'Sem configurar servidores. Sem entender DNS. Um comando e seu software está no ar, acessível ao mundo.',
    detail: 'Deploy em Vercel, Netlify ou Railway com um clique.',
  },
];

export default function ProcessSection() {
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
          <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">O Método</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Do Zero ao Deploy em 3 Passos
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A engenharia de software desmistificada. O poder do Vale do Silício acessível através da linguagem natural.
          </p>
        </motion.div>

        {/* Steps - Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-hover group relative rounded-2xl border border-white/10 bg-[#0A0A0A]/80 p-8 hover:border-white/20 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-white/[0.03] group-hover:text-blue-500/[0.08] transition-colors">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <step.icon className="w-5 h-5 text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
              <p className="text-sm font-medium text-blue-400 mb-4">{step.subtitle}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{step.description}</p>
              
              {/* Detail */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-zinc-600">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
