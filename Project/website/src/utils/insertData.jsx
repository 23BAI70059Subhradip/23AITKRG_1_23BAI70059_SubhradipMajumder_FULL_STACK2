import { supabase } from "../supabaseClient";

export async function InsertSingleData(date, val, type){

  const { data, error } = await supabase
    .from('Transactions')
    .insert([
      {
        created_at: date.format("YYYY-MM-DD"),
        revenue: Number(val),
        Type: type
      }
    ])
    .select();

  if(error){
    console.log(error);
    return [false,error];
  }

  return [true,data];
}