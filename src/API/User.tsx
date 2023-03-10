import { Idtype } from "../Types/idType"
import supabase from "./client"

export const UserParIdentifiant = async ({id}:Idtype) =>{
    try{
      const { data: Identifiant, error } = await supabase.from('Identifiant').select(id)
      if(Identifiant){
        return Identifiant
      }
    }catch(e){
      console.log(e);
      
    }
    
}