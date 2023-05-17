import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gbglmhzwumoykjzxlqkn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZ2xtaHp3dW1veWtqenhscWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1NzE4ODcsImV4cCI6MTk5ODE0Nzg4N30.kSxhPzmSGZhFJhbH886COoRuu4LEuFfeHn2WcxNNF0g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
