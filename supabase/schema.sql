-- Run this in your Supabase project SQL editor

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id            uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at    timestamptz DEFAULT now(),
  name          text        NOT NULL,
  email         text        NOT NULL,
  score_pct     integer     NOT NULL,
  correct_count integer     NOT NULL,
  partial_count integer     NOT NULL,
  incorrect_count integer   NOT NULL,
  retried_count integer     NOT NULL,
  results       jsonb       NOT NULL  -- full per-question breakdown incl. reflection text
);

CREATE INDEX IF NOT EXISTS quiz_attempts_email_idx      ON quiz_attempts (email);
CREATE INDEX IF NOT EXISTS quiz_attempts_created_at_idx ON quiz_attempts (created_at DESC);

-- Enable Row Level Security
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Anyone (anonymous) can INSERT (submit their results)
CREATE POLICY "Anyone can submit quiz results"
  ON quiz_attempts FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated users can SELECT (Supabase dashboard uses service role and bypasses RLS)
CREATE POLICY "Authenticated users can view results"
  ON quiz_attempts FOR SELECT TO authenticated USING (true);
