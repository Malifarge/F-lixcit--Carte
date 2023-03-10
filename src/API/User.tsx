import { Idtype } from "../Types/idType"
import supabase from "./client"

export const UserParIdentifiant = async ({id}:Idtype) =>{
      const { data: Identifiant, error } = await supabase.from('Identifiant').select(id)
      if(Identifiant){
        return Identifiant
      }else{
        console.log(error);
        
      }
      
}

export const UserACT = async({id}:Idtype)=>{

let { data: User, error } = await supabase
.from('User')
.select(id)

if(User){
  return (User[0]);
}else{
  console.log(error);
  
}


}