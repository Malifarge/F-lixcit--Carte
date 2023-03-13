/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginACT } from "../API/User"
import { Input } from "../Components/Input"
import { CommerçantContext } from "../Context/Commercant"
import { UserContext } from "../Context/IdUser"
import { Form, FormContain } from "../Styles/Connect"
import { jaune } from "../Styles/Couleur"
import { ButtonStyle } from "../Styles/Général"

export const LoginCommerçant = () =>{
    const [email,setEmail]= useState<string>('')
    const [password,setPassword]= useState<string>('')

    const {idUser} = useContext(UserContext) as any
    const {setToken} = useContext(CommerçantContext) as any

    const navigate = useNavigate()

    useEffect(()=>{
        if(!idUser){
            navigate("/")
        }
    },[idUser])

    const handleLogSubmit = async(e:any)=>{
        e.preventDefault()
        const body={
            email,
            password
        }
        const login = await LoginACT(body)
        setToken(login.session?.access_token);     
    }

    return(
        <FormContain>
            <Form onSubmit={handleLogSubmit}>
                <Input text="Email" type="text" onChange={(e:any)=>setEmail(e.target.value)}/>
                <Input text="Mot de passe" type="text" onChange={(e:any)=>setPassword(e.target.value)}/>
                <ButtonStyle color={jaune} >Ce connecter</ButtonStyle>
            </Form>
        </FormContain>
    )
}