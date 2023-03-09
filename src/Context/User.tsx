import { createContext, useEffect, useState } from "react";
import { ContextPropsType } from "../Types/Context";

const UserContext = createContext({})

const UserContextProvider = ({children}:ContextPropsType)=>{
    const [idUser,setIdUser] = useState<string|null>(null)
    const [infoIdUser,setInfoIdUser] = useState<string[]|null>(null)

    useEffect(()=>{
        const idLocal= localStorage.getItem('IdFLX')
        if(idLocal){
            setIdUser(idLocal)
        }
    },[])

    useEffect(()=>{
        if(idUser){
            localStorage.setItem('IdFLX',idUser)
            setInfoIdUser(idUser.split("-"))
        }
    },[idUser])

    const value={
        idUser,
        setIdUser,
        infoIdUser
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export{UserContext,UserContextProvider}