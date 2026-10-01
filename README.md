# Programação com IA — Do Zero ao Deploy

Landing page de alta conversão para o curso online **"Programação com IA (Do Zero ao Deploy)"**, chancelado por Ray Henrique e KL Tecnologia.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## 📋 Sobre o Projeto

Landing page premium desenvolvida para capturar leads para a lista de espera do curso. O design segue a estética de empresas como Vercel, Linear e Supabase — dark mode absoluto, tipografia geométrica, animações sutis e foco total na conversão.

### Público-Alvo
- Empreendedores e fundadores
- Profissionais de outras áreas (leigos em código)
- Pessoas que querem tirar ideias do papel usando IA

### Proposta de Valor
> "Transforme ideias em software usando apenas o português."

## 🛠️ Stack Tecnológica

- **Framework:** React 18 + Vite
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS 4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Fonte:** Inter (Google Fonts)
- **Backend:** Supabase (PostgreSQL + Auth + Realtime)

## 🎨 Design System

### Paleta de Cores
- **Background primário:** `#000000`
- **Superfícies secundárias:** `#0A0A0A` a `#111111`
- **Texto principal:** `#FFFFFF`
- **Texto secundário:** `#A1A1AA`
- **Acento (CTA):** `#0070F3` (azul ciano)
- **Bordas translúcidas:** `rgba(255, 255, 255, 0.1)`

### Estética
- Dark mode absoluto
- Grid lines sutis de fundo
- Glassmorphism em headers
- Glow effects em botões primários
- Bordas finas e translúcidas
- Muito whitespace e respiro visual

## 📦 Estrutura de Arquivos

```
landcursoIA/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Navegação fixa minimalista
│   │   ├── HeroSection.tsx         # Hero cinematográfico com CTA
│   │   ├── VibeCodingMockup.tsx    # Mockup animado (CRÍTICO)
│   │   ├── ProblemSection.tsx      # Dores e soluções
│   │   ├── ProcessSection.tsx      # Método em 3 passos
│   │   ├── WhatYouCanCreate.tsx    # Exemplos de projetos
│   │   ├── AuthorSection.tsx       # Bio do mentor
│   │   └── Footer.tsx              # CTA final + copyright
│   ├── hooks/
│   │   └── useWaitlist.ts          # Hook para formulários
│   ├── lib/
│   │   └── supabase.ts             # Cliente Supabase configurado
│   ├── services/
│   │   └── leads.ts                # Funções de CRUD para waitlist
│   ├── types/
│   │   └── supabase.ts             # Tipos TypeScript
│   ├── App.tsx                     # Composição principal
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Estilos globais + Tailwind
│   └── vite-env.d.ts               # Tipos do Vite
├── supabase/
│   └── schema.sql                  # SQL para criar tabela no Supabase
├── .env.example                    # Template de variáveis de ambiente
├── .env.local                      # Variáveis locais (não commitar)
├── SUPABASE_SETUP.md               # Guia completo de configuração
└── README.md                       # Este arquivo
```

### Componente Crítico: VibeCodingMockup

Animação em loop de 3 estágios que simula o processo de vibe coding:

1. **Prompt:** Texto sendo digitado ("Crie um dashboard de vendas...")
2. **Código:** Linhas de código aparecendo com efeito shimmer
3. **UI:** Dashboard pronto revelado com gráficos animados

O ciclo se repete automaticamente usando `AnimatePresence` do Framer Motion.

## ✨ Funcionalidades

### Animações e Motion Design
- **Scroll animations:** Seções surgem suavemente com `whileInView`
- **Stagger effects:** Elementos aparecem em cascata
- **Hover effects:** Cards com scale e borda mais clara
- **Glow buttons:** Sombra neon azul no hover
- **Microinterações:** Botões com scale no click, inputs com ring no focus

### Formulários de Captura
- Input de e-mail com validação
- Feedback visual de sucesso
- Acessibilidade com `aria-labels`
- Localizados no Hero e Footer

### Responsividade
- Mobile-first design
- Mockup se adapta graciosamente em telas menores
- Grid responsivo em todas as seções

## 🗄️ Integração com Supabase

O projeto está configurado para usar **Supabase** como backend para captura de leads.

### Funcionalidades
- ✅ Captura de emails na waitlist
- ✅ Validação de duplicatas
- ✅ Tracking de origem (hero/footer)
- ✅ Modo demo (funciona sem Supabase)
- ✅ Row Level Security (RLS) configurado

### Configuração Rápida

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Execute `supabase/schema.sql` no SQL Editor
3. Copie as credenciais para `.env.local`:

```bash
cp .env.example .env.local
```

4. Edite `.env.local` com suas credenciais:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

📖 **Guia completo:** Veja [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) para instruções detalhadas.

### Modo Desenvolvimento (sem Supabase)

Se você não configurar o Supabase, o projeto funciona em **modo demo**:
- Formulários aceitam emails
- Retorna sucesso simulado
- Nenhum dado é salvo
- Console mostra aviso

Isso permite desenvolver a UI sem precisar do banco.

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- (Opcional) Conta no Supabase para captura de leads

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd landcursoIA

# Instale as dependências
npm install

# Configure as variáveis de ambiente (opcional)
cp .env.example .env.local
# Edite .env.local com suas credenciais do Supabase
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### Build para Produção

```bash
# Gere o build otimizado
npm run build

# Os arquivos estarão em dist/
```

### Verificação de Tipos

```bash
# Execute o typecheck
npm run typecheck
```

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com HMR |
| `npm run build` | Gera build otimizado para produção |
| `npm run typecheck` | Verifica tipos TypeScript |
| `npm run preview` | Preview do build de produção |

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Supabase (obtenha em supabase.com → Settings → API)
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui

# Ambiente
VITE_APP_ENV=development
```

**⚠️ Importante:**
- Use a chave `anon` (pública), NUNCA a `service_role`
- O arquivo `.env.local` já está no `.gitignore`
- Sem essas variáveis, o projeto funciona em modo demo

## 🎯 Seções da Landing Page

1. **Hero Cinematográfico** — Título de alto impacto + mockup animado + formulário de captura
2. **A Quebra de Paradigma** — Dores do mercado vs. soluções com IA
3. **A Jornada** — Método em 3 passos (Pense → Dialogue → Publique)
4. **O que Você Será Capaz de Criar** — Exemplos de projetos possíveis
5. **Autoridade** — Bio de Ray Henrique + KL Tecnologia
6. **CTA Final** — Repetição do formulário de captura

## 🔗 Links

- **LinkedIn do Mentor:** [linkedin.com/in/rayhenrique](https://linkedin.com/in/rayhenrique)
- **Empresa:** KL Tecnologia

## 📄 Licença

Este projeto é proprietário e confidencial. Todos os direitos reservados à KL Tecnologia.

## 👨‍💻 Autor

**Ray Henrique** — KL Tecnologia  
Especialista em conectar negócios à tecnologia.

---

Desenvolvido com ⚡ por KL Tecnologia
