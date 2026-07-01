-- Pulse for Nurses — Supabase setup for accounts & saved progress.
-- Run this once in your Supabase project:  Dashboard -> SQL Editor -> New query -> paste -> Run.
-- It creates the table that stores each user's quiz results, protected so users
-- can only ever see and write their OWN rows (Row Level Security).

create table if not exists public.quiz_results (
  id               bigint generated always as identity primary key,
  user_id          uuid not null references auth.users (id) on delete cascade,
  program_id       text,
  test_id          text,
  test_title       text,
  test_type        text,
  score            int,
  correct          int,
  total            int,
  pass_probability int,
  detail           jsonb default '{}'::jsonb,
  submitted_at     timestamptz default now(),
  created_at       timestamptz default now()
);

create index if not exists quiz_results_user_idx on public.quiz_results (user_id, submitted_at desc);

-- Lock the table down with Row Level Security.
alter table public.quiz_results enable row level security;

-- A signed-in user can read only their own results.
create policy "own results - select"
  on public.quiz_results for select
  using (auth.uid() = user_id);

-- A signed-in user can insert results only for themselves.
create policy "own results - insert"
  on public.quiz_results for insert
  with check (auth.uid() = user_id);

-- (Optional) allow users to delete their own history.
create policy "own results - delete"
  on public.quiz_results for delete
  using (auth.uid() = user_id);


-- ============================================================
-- USER PREFERENCES — the learner's chosen programs (for the Dashboard).
-- One row per user; `programs` is a JSON array of program ids, e.g.
--   ["diploma-nursing","nclex","msn"]
-- Without this table the Dashboard still works (interests stay device-local);
-- adding it makes the program selection sync across devices.
-- ============================================================
create table if not exists public.user_prefs (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  programs    jsonb not null default '[]'::jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.user_prefs enable row level security;

-- A signed-in user can read only their own preferences.
create policy "own prefs - select"
  on public.user_prefs for select
  using (auth.uid() = user_id);

-- A signed-in user can create their own preferences row.
create policy "own prefs - insert"
  on public.user_prefs for insert
  with check (auth.uid() = user_id);

-- A signed-in user can update their own preferences row (needed for upsert).
create policy "own prefs - update"
  on public.user_prefs for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
