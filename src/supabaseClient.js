import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://jglrxrhafrquzijytonv.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_oPLKKSuYPg63Ztsoth7CBg_tW8_OoTi'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)