import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PROJECT_URL;
const supabaseAnonKey = process.env.SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log('Supabase: ', supabase);
export async function TrademarkInfo() {
  let { data, error } = await supabase.from('trademark-info').select('*');
  if (error) console.error('Error: ', error);
  else console.log('Trademarks: ', data);
}

export async function IndustrialDesignInfo() {
  let { data, error } = await supabase.from('industrial-design-info').select('*');
  if (error) console.error('Error: ', error);
  else console.log('Industrial Designs: ', data);
}
