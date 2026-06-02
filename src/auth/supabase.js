import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mysuperspecialsupabaseprojectforsistrtestrepo1.supabase.co";
const supabase_db_password = "D1iPlLQWNP5sVDCl"
const supabase_secret_api_key = "sb_secret_j6POHlaAugvJSV-J2CZ3Kw_1nMIIJhZ"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
