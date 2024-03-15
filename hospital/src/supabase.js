
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mppbbwblwqqwcojuywen.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcGJid2Jsd3Fxd2NvanV5d2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjUyODIsImV4cCI6MjAyNTQwMTI4Mn0.FncPX6AORa-18cMJfBawhVzaxWdLpvPrcXG7R4-8dcU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase