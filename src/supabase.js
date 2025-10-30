import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zzbwfbvsjvlpgzounbit.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6YndmYnZzanZscGd6b3VuYml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2OTA1NjEsImV4cCI6MjA3NzI2NjU2MX0.Sd57AL1rZetiKz2PGC11xxXI5wxt5rCNXPsnvE4FuJw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
