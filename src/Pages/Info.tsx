/* eslint-disable react-hooks/exhaustive-deps */

import moment from "moment"
import { QRCodeCanvas } from "qrcode.react"
import { useContext, useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { UserParIdentifiant } from "../API/User"
import { CommerçantContext } from "../Context/Commercant"
import { UserContext } from "../Context/IdUser"
import { InfoContain } from "../Styles/Infos"
import { UserType } from "../Types/User"

export const Info = ()=>{

    const {id} = useParams()

    const [client,setClient]=useState<UserType|null>(null)
    const [commerce,setCommerce]=useState<boolean>(false)

    const {idUser,setIdUser,infoIdUser} = useContext(UserContext) as any
    const {user} = useContext(CommerçantContext) as any

    useEffect(()=>{
        if(idUser){
            UserFetch()
        }else{
            setIdUser(id)
        }
    },[idUser])

    useEffect(()=>{
        if(user){
            setCommerce(true)
        }else{
            setCommerce(false)
        }
    },[user])

    const UserFetch = async()=>{
        if(idUser){
            const userApi = await UserParIdentifiant(idUser) as any
            setClient(userApi[0]);
        }
        
    }


    return (
        <InfoContain>
            <h1>{client?.Prénom} {client?.Nom}</h1>
             <p>{client?.email}</p>
             <p>{moment(client?.created_at).format("DD/MM/YYYY")}</p>
             {infoIdUser && <>
             <p>Association: {infoIdUser[3]}</p>
             </>}
             {client && <QRCodeCanvas value={`${process.env.REACT_APP_URL}${client.id}`}/>}
             {commerce && <p>Ce qu'on veut faire avec la carte</p>}
        </InfoContain>
    )
}