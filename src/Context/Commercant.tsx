/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState } from "react";
import { GetACT } from "../API/User";
import { ChildrenPropsType } from "../Types/Children";

const CommerçantContext = createContext({})

const CommerçantContextProvider = ({children}:ChildrenPropsType) =>{
    const [user,setUser] = useState<any>(null)
    const [token,setToken] = useState<string>('')

    useEffect(()=>{
        const localToken = localStorage.getItem('TokenCarteACT')
        if(localToken){
            setToken(localToken)
        }
    },[])

    useEffect(()=>{
        if(token){
            localStorage.setItem('TokenCarteACT',token)
            try{
                ACT()
            }catch(e){
                console.log(e);
                
            }
        }
    },[token])

    const ACT = async() =>{
        const data = await GetACT(token)
        setUser(data) 
        console.log(data);
        
    }

    const logoutCommerçant = ()=>{
        setUser(null)
        setToken('')
        localStorage.removeItem('TokenCarteACT')
    }

    const value ={
        user,
        setUser,
        token,
        setToken,
        logoutCommerçant
    }

    return <CommerçantContext.Provider value={value}>{children}</CommerçantContext.Provider>
}

export {CommerçantContext,CommerçantContextProvider}