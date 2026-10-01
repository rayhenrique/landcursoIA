# Configuração do Supabase

Este guia explica como configurar o Supabase para a landing page.

## 📋 Pré-requisitos

- Conta no [Supabase](https://supabase.com) (gratuita)
- Node.js 18+ instalado

## 🚀 Passo a Passo

### 1. Criar Projeto no Supabase

1. Acesse [app.supabase.com](https://app.supabase.com)
2. Clique em **"New Project"**
3. Preencha:
   - **Name:** `landcursoIA` (ou outro nome)
   - **Database Password:** (guarde esta senha!)
   - **Region:** Brazil (Southeast) ou mais próximo
4. Aguarde o projeto ser criado (~2 minutos)

### 2. Obter Credenciais

1. No dashboard do projeto, vá em **Settings** → **API**
2. Copie:
   - **Project URL** (ex: `https://abc123.supabase.co`)
   - **anon public key** (chave longa que começa com `eyJ...`)

### 3. Criar Tabela no Banco

1. No dashboard, vá em **SQL Editor** (menu lateral)
2. Clique em **"New Query"**
3. Copie todo o conteúdo do arquivo `supabase/schema.sql`
4. Cole no editor e clique em **"Run"** (ou Ctrl+Enter)
5. Verifique se a tabela `waitlist` foi criada em **Table Editor**

### 4. Configurar Variáveis de Ambiente

1. Na raiz do projeto, crie um arquivo `.env.local`:

```bash
cp .env.example .env.local
```

2. Edite `.env.local` com suas credenciais:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_APP_ENV=development
```

**⚠️ IMPORTANTE:**
- Use a chave `anon` (pública), NÃO a `service_role`
- Nunca commite o arquivo `.env.local` (já está no `.gitignore`)

### 5. Testar a Conexão

```bash
npm run dev
```

1. Acesse `http://localhost:3000`
2. Preencha o formulário de email no Hero ou Footer
3. Verifique no **Table Editor** do Supabase se o registro foi criado

## 🔒 Segurança

### Row Level Security (RLS)

O schema já configura RLS com as seguintes políticas:

- ✅ **INSERT anônimo:** Qualquer visitante pode se inscrever
- ✅ **SELECT autenticado:** Apenas usuários logados podem ver os dados
- ❌ **UPDATE/DELETE:** Bloqueado para usuários anônimos

### Verificar Políticas RLS

1. Vá em **Authentication** → **Policies**
2. Selecione a tabela `waitlist`
3. Verifique se as políticas estão ativas

## 📊 Visualizar Dados

### No Dashboard do Supabase

1. Vá em **Table Editor**
2. Selecione a tabela `waitlist`
3. Veja todos os registros em tempo real

### Queries Úteis

```sql
-- Total de inscrições
SELECT COUNT(*) FROM waitlist;

-- Inscrições de hoje
SELECT * FROM waitlist 
WHERE DATE(created_at) = CURRENT_DATE;

-- Inscrições por fonte
SELECT source, COUNT(*) as total 
FROM waitlist 
GROUP BY source;

-- Últimas 10 inscrições
SELECT * FROM waitlist 
ORDER BY created_at DESC 
LIMIT 10;
```

## 🔄 Modo Desenvolvimento (sem Supabase)

Se você não configurar o Supabase, o projeto funciona em **modo demo**:

- Os formulários aceitam emails
- Retorna sucesso simulado
- Nenhum dado é salvo
- Console mostra aviso: "Supabase não configurado"

Isso permite desenvolver a UI sem precisar do banco.

## 🚨 Troubleshooting

### Erro: "relation waitlist does not exist"

**Solução:** Execute o `supabase/schema.sql` no SQL Editor.

### Erro: "new row violates row-level security policy"

**Solução:** Verifique se as políticas RLS estão configuradas corretamente.

### Erro: "Invalid API key"

**Solução:** Verifique se copiou a chave `anon` correta em Settings → API.

### Formulário não envia (modo demo)

**Solução:** Verifique se o arquivo `.env.local` existe e tem as credenciais corretas.

## 📦 Estrutura de Arquivos

```
src/
├── lib/
│   └── supabase.ts          # Cliente Supabase configurado
├── services/
│   └── leads.ts             # Funções de CRUD para waitlist
├── hooks/
│   └── useWaitlist.ts       # Hook para formulários
└── types/
    └── supabase.ts          # Tipos TypeScript

supabase/
└── schema.sql               # SQL para criar tabela e políticas
```

## 🎯 Próximos Passos

Após configurar o Supabase:

1. ✅ Testar o formulário de inscrição
2. ✅ Verificar se os dados aparecem no Table Editor
3. ✅ Testar o fluxo completo (Hero + Footer)
4. ✅ Configurar notificações por email (opcional)
5. ✅ Criar dashboard admin (opcional)

## 🔗 Links Úteis

- [Supabase Docs](https://supabase.com/docs)
- [JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Dashboard](https://app.supabase.com)

---

**Dúvidas?** Consulte a documentação oficial do Supabase ou entre em contato.
