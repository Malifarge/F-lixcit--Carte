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

    const {idUser,setIdUser} = useContext(UserContext) as any
    const {user} = useContext(CommerçantContext) as any

    useEffect(()=>{
        if(idUser){
            UserFetch()
        }else{
            setIdUser(id)
        }
    },[idUser])

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
             {client && <QRCodeCanvas value={client.id}/>}
        </InfoContain>
    )
}