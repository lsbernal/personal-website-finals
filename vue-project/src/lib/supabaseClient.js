import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hyffzbwglayfxpoawzyv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5ZmZ6YndnbGF5Znhwb2F3enl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMzQyNjEsImV4cCI6MjA1NjcxMDI2MX0.lsHFFzDhbSytRx-imU08_RRrnCseE1SziDDS3aFR9Gc')