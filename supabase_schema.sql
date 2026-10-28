-- SevenUnique Tech Solutions - Supabase Blog Posts Schema
-- Run this script in your Supabase SQL Editor if setting up a new project

CREATE TABLE IF NOT EXISTS public.posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  meta_description TEXT,
  cover_image_url TEXT,
  author TEXT DEFAULT 'SevenUnique Team',
  tags TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  source TEXT DEFAULT 'manual' CHECK (source IN ('manual', 'ai', 'ai-edited')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for high performance queries
CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_status ON public.posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON public.posts(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Public can read all published posts
CREATE POLICY "Allow public read access to published posts" 
ON public.posts 
FOR SELECT 
USING (status = 'published');

-- Service role has full unrestricted access
CREATE POLICY "Allow service role full access" 
ON public.posts 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);
