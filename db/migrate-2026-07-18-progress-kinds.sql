-- ============================================================
-- MIGRATION (run once in the Supabase SQL Editor) — 2026-07-18
--
-- WHY: learning_progress was created with a CHECK constraint that
-- only allows kind in ('academic','ielts'). The site now also syncs
-- kinds 'ielts-writing', 'ielts-speaking', 'cv' and 'review'; those
-- upserts are silently rejected until this constraint is widened.
--
-- Safe to run any time; existing rows are untouched.
-- ============================================================

alter table public.learning_progress
  drop constraint if exists learning_progress_kind_check;

alter table public.learning_progress
  add constraint learning_progress_kind_check
  check (kind in ('academic','ielts','ielts-writing','ielts-speaking','cv','review'));

-- Verify:
--   select conname, pg_get_constraintdef(oid)
--   from pg_constraint
--   where conrelid = 'public.learning_progress'::regclass;
