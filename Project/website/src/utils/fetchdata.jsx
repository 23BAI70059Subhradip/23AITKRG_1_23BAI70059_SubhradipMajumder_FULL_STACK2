import {supabase}  from "../supabaseClient";

export async function fetchAllTransactionData() {
    const { data, error } = await supabase.from("Transactions").select("*");

    if (error) {
      console.error("Failed to fetch Transactions:", error.message);
      return [];
    }

    console.log(data);
    return data;
}
