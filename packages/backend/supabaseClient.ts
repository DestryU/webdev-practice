import {createClient} from "@supabase/supabase-js"

const supabase = createClient(
    "https://bwhfxnnosllijimjlnff.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3aGZ4bm5vc2xsaWppbWpsbmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5MzYxNTUsImV4cCI6MjA1MTUxMjE1NX0.g0EztNalkaXTk_LVuoX1_CbucYsp67t8MIDhf5EnzYI"
)

export default supabase