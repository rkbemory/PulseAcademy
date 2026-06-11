/* Pulse for Nurses — account/login configuration.
   Fill these in from your Supabase project (Settings -> API):
     - supabaseUrl     : the "Project URL"  (e.g. https://abcd1234.supabase.co)
     - supabaseAnonKey : the "anon public"  API key (safe to expose in the browser;
                         it is protected by Row Level Security on the database).
   Until BOTH are filled with real values, accounts stay completely disabled and
   the site behaves exactly as it does today (progress saved locally in the browser).
   Everything remains FREE — accounts only let users save progress across devices. */
window.PulseAuthConfig = {
  supabaseUrl:     "https://kggkdxfszgougikcjhzn.supabase.co",
  supabaseAnonKey: "sb_publishable_3ktqBX14e6B4Pi70vZxWEw_564oRbMf",

  /* Soft prompt: after a visitor finishes this many quizzes anonymously,
     show a one-time, dismissible banner inviting them to save their progress. */
  promptAfterQuizzes: 2
};
