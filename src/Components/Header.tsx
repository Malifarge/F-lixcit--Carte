import { useContext, useEffect, useState } from "react"
import { UserParIdentifiant } from "../API/User"
import { UserContext } from "../Context/IdUser"
import { bleu, jaune, Klein, vert } from "../Styles/Couleur"
import { ButtonStyle } from "../Styles/Général"
import { HeaderStyle } from "../Styles/Header"
import { UserType } from "../Types/User"

export const Header = ()=>{
    

    const [color,setColor]= useState<string>(Klein)
    const [user,setUser]= useState<UserType|null>(null)

    const {infoIdUser,idUser,logoutId} = useContext(UserContext) as any

    useEffect(()=>{
        UserFetch()
    },[idUser])

    const UserFetch = async()=>{
        if(idUser){
            const userApi = await UserParIdentifiant(idUser) as any
            setUser(userApi[0]);
        }
        
    }

    useEffect(()=>{
        if(infoIdUser){
            const carte = infoIdUser[1]
            if (carte==="ACT") {
                setColor(jaune)
            }else if (carte==="HBT"){
                setColor(bleu)
            }else if (carte==="SJR"){
                setColor(vert)
            }
        }else{
            setColor(Klein)
        }
    },[infoIdUser])

    return(
        <HeaderStyle color={color}>
            <img src="/images/Felixcite-Logo.png" alt="Logo Félixcité"/>
            {idUser && <><p>{user && `${user.Prénom} ${user.Nom}`}</p> <ButtonStyle color={color} onClick={logoutId}>Déconnection</ButtonStyle> </>}
        </HeaderStyle>
    )
}