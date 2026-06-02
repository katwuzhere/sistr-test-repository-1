import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mysuperspecialsupabaseprojectforsistrtestrepo1.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
