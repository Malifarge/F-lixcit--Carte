import { UserInfoType } from "../Types/User"
import supabase from "./client"

export const UserParIdentifiant = async (id:string) =>{
      const { data: Identifiant, error } = await supabase.from('Identifiant').select().eq('id',id)
      if(Identifiant){
        return Identifiant
      }else{
        console.log(error);
        
      }
      
}

export const UserIdParLogin = async(email:string)=>{
  let { data: Identifiant, error } = await supabase.from('Identifiant').select().eq('email',email)
  if(Identifiant){
    return Identifiant
  }else{
    console.log(error);
    
  }
}

// export const ACTCreate = async(body:UserInfoType)=>{
//   let { data, error } = await supabase.auth.signUp({
//     email: body.email,
//     password: body.password
//   })
// }

export const LoginACT = async(body:UserInfoType)=>{
  
  let { data, error } = await supabase.auth.signInWithPassword({
    email: body.email,
    password: body.password
  })

  if(data){
    return data
  }else{
    console.log(error);
    
  }

  
}

export const GetACT = async(token:string)=>{

const { data: { user } } = await supabase.auth.getUser(token)

return user

}