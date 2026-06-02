import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mysuperspecialsupabaseprojectforsistrtestrepo1.supabase.co";
const supabase_db_password = "ohno"
const supabase_secret_api_key = "ohno"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
