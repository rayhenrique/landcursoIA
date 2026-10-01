-- ===========================================
-- Schema para Lista de Espera - Programação com IA
-- ===========================================
-- Execute este SQL no Supabase SQL Editor:
-- https://app.supabase.com → SQL Editor → New Query

-- Criar tabela de waitlist
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT DEFAULT 'landing_page',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Criar índice para busca por email
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Criar índice para ordenação por data
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- ===========================================
-- Row Level Security (RLS)
-- ===========================================
-- Habilitar RLS na tabela
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT anônimo (qualquer pessoa pode se inscrever)
CREATE POLICY "Permitir inscrições anônimas"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política: Permitir SELECT apenas para usuários autenticados (admin)
-- Nota: Em produção, crie um usuário admin ou use service_role
CREATE POLICY "Permitir leitura para admins"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- ===========================================
-- Função para atualizar updated_at automaticamente
-- ===========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar updated_at
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
-- Comentários (opcional, para documentação)
-- ===========================================
COMMENT ON TABLE waitlist IS 'Lista de espera para o curso Programação com IA';
COMMENT ON COLUMN waitlist.email IS 'Email do lead (único)';
COMMENT ON COLUMN waitlist.name IS 'Nome do lead (opcional)';
COMMENT ON COLUMN waitlist.source IS 'Origem da inscrição (hero_section, footer_section, etc)';

-- ===========================================
-- Views úteis (opcional)
-- ===========================================

-- View para contar inscrições por dia
CREATE OR REPLACE VIEW waitlist_daily_count AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as count
FROM waitlist
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- View para contar inscrições por fonte
CREATE OR REPLACE VIEW waitlist_source_count AS
SELECT 
  source,
  COUNT(*) as count
FROM waitlist
GROUP BY source
ORDER BY count DESC;

-- ===========================================
-- Exemplos de queries úteis
-- ===========================================

-- Contar total de inscrições
-- SELECT COUNT(*) FROM waitlist;

-- Buscar últimas 10 inscrições
-- SELECT * FROM waitlist ORDER BY created_at DESC LIMIT 10;

-- Buscar inscrições de hoje
-- SELECT * FROM waitlist WHERE DATE(created_at) = CURRENT_DATE;

-- Exportar todos os emails (para newsletter)
-- SELECT email FROM waitlist ORDER BY created_at;
