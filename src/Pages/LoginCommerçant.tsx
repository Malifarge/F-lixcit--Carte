/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserACT } from "../API/User"
import { UserContext } from "../Context/IdUser"
import { FormContain } from "../Styles/Connect"
import { UserACTType } from "../Types/User"

export const LoginCommerçant = () =>{

    const [user,setUser]= useState<UserACTType|null>(null)

    const {idUser} = useContext(UserContext) as any

    const navigate = useNavigate()

    useEffect(()=>{
        if(!idUser){
            navigate("/")
        }else{
           FetchUser()
        }
    },[idUser])

    const FetchUser = async () =>{
        const User= await UserACT(idUser) as any
        setUser(User);
        console.log(User);
        
        
    }

    return(
        <FormContain>
            <h1>{user?.email}</h1>
        </FormContain>
    )
}