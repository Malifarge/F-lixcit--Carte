import { Idtype } from "../Types/idType"
import { UserInfoType } from "../Types/User"
import supabase from "./client"

export const UserParIdentifiant = async ({id}:Idtype) =>{
      const { data: Identifiant, error } = await supabase.from('Identifiant').select(id)
      if(Identifiant){
        return Identifiant
      }else{
        console.log(error);
        
      }
      
}

export const UserIdParLogin = async()=>{
  let { data: Identifiant, error } = await supabase.from('Identifiant').select()
  if(Identifiant){
    return Identifiant
  }else{
    console.log(error);
    
  }
}

export const UserACT = async({id}:Idtype)=>{

  let { data: User, error } = await supabase.from('User').select(id)

  if(User){
    return (User[0]);
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