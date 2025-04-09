import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mwvjqbdvaxdxgnryskvu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13dmpxYmR2YXhkeGducnlza3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTI4NzEsImV4cCI6MjA1OTc4ODg3MX0.QIpaa7i1G-2_9Knev8At-RM0viXmj-A-phbHDIsQyBQ';
export const supabase = createClient(supabaseUrl, supabaseKey);
