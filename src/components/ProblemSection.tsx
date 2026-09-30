import { motion } from 'framer-motion';
import { Clock, Code, Brain, Zap } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Meses estudando sintaxe',
    description: 'Enquanto você aprende variáveis e loops, o mercado está lançando produtos.',
    stat: '6+ meses',
    statLabel: 'para aprender a programar do zero',
  },
  {
    icon: Code,
    title: 'Barreira técnica',
    description: 'Você tem a regra de negócio na cabeça, mas trava ao abrir o editor de código.',
    stat: '87%',
    statLabel: 'dos empreendedores desistem por isso',
  },
  {
    icon: Brain,
    title: 'Ferramentas complexas',
    description: 'IDEs, frameworks, servidores... O caminho até o deploy parece impossível.',
    stat: '∞',
    statLabel: 'tutoriais que não resolvem seu problema',
  },
];

const solutions = [
  {
    icon: Zap,
    title: 'Velocidade de execução',
    description: 'Do conceito ao deploy em horas, não meses. A IA escreve o código, você define a lógica.',
  },
  {
    icon: Brain,
    title: 'Linguagem natural',
    description: 'Descreva o que quer em português. A IA traduz para código funcional automaticamente.',
  },
  {
    icon: Zap,
    title: 'Deploy simplificado',
    description: 'Publique na nuvem com um comando. Sem configurar servidores ou DNS manualmente.',
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,112,243,0.03)_0%,transparent_70%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            O mercado não espera você aprender sintaxe.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A barreira técnica foi destruída pela IA. Agora, quem tem a ideia tem o poder de executá-la.
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group relative rounded-xl border border-white/10 bg-[#0A0A0A]/50 p-6 hover:border-white/20 hover:scale-[1.02] transition-all duration-300"
            >
              <problem.icon className="w-5 h-5 text-zinc-500 mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-white font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">{problem.description}</p>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-2xl font-bold text-white">{problem.stat}</span>
                <p className="text-xs text-zinc-600 mt-1">{problem.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-blue-400 uppercase tracking-wider">A solução</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group relative rounded-xl border border-blue-500/20 bg-blue-500/[0.03] p-6 hover:border-blue-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              <solution.icon className="w-5 h-5 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">{solution.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
