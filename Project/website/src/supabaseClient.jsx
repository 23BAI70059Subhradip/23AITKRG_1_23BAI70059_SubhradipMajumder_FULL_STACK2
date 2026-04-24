import { createClient } from '@supabase/supabase-js';

// Retrieve these values from your Supabase dashboard
const supabaseUrl = "https://frhuhtelpvfmebdrbnsm.supabase.co";
const supabaseKey = "sb_publishable_8xCQ1ASCL3tFrKqPZwlEDQ_4nCSYOJm";

export const supabase = createClient(supabaseUrl, supabaseKey);