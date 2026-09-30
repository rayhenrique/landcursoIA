import { motion } from 'framer-motion';
import { Globe, LayoutDashboard, ShoppingBag, FileText, Bot, BarChart3 } from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas profissionais com formulários, animações e design responsivo — prontas para capturar clientes.',
    tag: 'Marketing',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards de Gestão',
    description: 'Painéis administrativos com gráficos, tabelas e métricas em tempo real para controlar seu negócio.',
    tag: 'Gestão',
  },
  {
    icon: ShoppingBag,
    title: 'SaaS Simples',
    description: 'Sistemas com autenticação, pagamentos e área do cliente. Do MVP ao produto completo.',
    tag: 'Produto',
  },
  {
    icon: FileText,
    title: 'Portfólios e Sites Institucionais',
    description: 'Sites elegantes para apresentar sua marca, serviços e cases de sucesso ao mundo.',
    tag: 'Branding',
  },
  {
    icon: Bot,
    title: 'Automações com IA',
    description: 'Bots, assistentes virtuais e integrações que automatizam tarefas repetitivas do seu dia a dia.',
    tag: 'Automação',
  },
  {
    icon: BarChart3,
    title: 'Ferramentas Internas',
    description: 'CRUDs, sistemas de controle e relatórios personalizados para sua operação.',
    tag: 'Operações',
  },
];

export default function WhatYouCanCreate() {
  return (
    <section className="relative py-24 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Possibilidades</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            O que você será capaz de criar
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Com as técnicas certas e a IA como sua aliada, o limite é apenas a sua imaginação.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover group relative rounded-xl border border-white/10 bg-[#0A0A0A]/50 p-6 hover:border-white/20 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#111] border border-white/[0.06] flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                  <project.icon className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-[10px] font-medium text-zinc-600 uppercase tracking-wider px-2 py-1 rounded-full border border-white/[0.06]">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
