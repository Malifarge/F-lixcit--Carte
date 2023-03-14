/* eslint-disable react-hooks/exhaustive-deps */

import moment from "moment"
import { QRCodeCanvas } from "qrcode.react"
import { useContext, useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { UserParIdentifiant } from "../API/User"
import { GetVillage } from "../API/Village"
import { CommerçantContext } from "../Context/Commercant"
import { UserContext } from "../Context/IdUser"
import { InfoContain } from "../Styles/Infos"
import { UserType } from "../Types/User"

export const Info = ()=>{

    const {id} = useParams()

    const [client,setClient]=useState<UserType|null>(null)
    const [village,setVillage]=useState<string|null>(null)
    const [commerce,setCommerce]=useState<boolean>(false)
    const [color,setColor]=useState<string>("#000000")

    const {idUser,setIdUser,infoIdUser} = useContext(UserContext) as any
    const {user} = useContext(CommerçantContext) as any

    useEffect(()=>{
        if(idUser){
            UserFetch()
        }
    },[idUser])

    useEffect(()=>{
        if(id){
            localStorage.setItem('IdFLX',id)
            setIdUser(id)
        }
    },[])

    useEffect(()=>{
        if(user){
            if(client){
                if(client.email===user.email){
                    setCommerce(false)
                }else{
                    setCommerce(true)
                }
            }
        }else{
            setCommerce(false)
        }
    },[client])

    useEffect(()=>{
        Village()
    },[infoIdUser])

    const UserFetch = async()=>{
        if(idUser){
            const userApi = await UserParIdentifiant(idUser) as any
            setClient(userApi[0]);
        }
    }

    const Village=async ()=>{
        if(infoIdUser){

            const villageid = await GetVillage(infoIdUser[2]) as any
            setVillage(villageid[0].Nom_Village)
        }
    }

    const handleColorChange = (e:any)=>{
        setColor(e.target.value);  
    }


    return (
        <InfoContain color={color}>
            <h1>{client?.Prénom} {client?.Nom}</h1>
            <section>
                <article>
                    <p>{client?.email}</p>
                    {infoIdUser && <p>Association: {infoIdUser[3]}</p>}
                    {village && <p>Village: {village}</p>}
                    <p>{moment(client?.created_at).format("DD/MM/YYYY")}</p>
                    <input type='color' value={color} onChange={handleColorChange}/>
                </article>
                {client && <QRCodeCanvas value={`${process.env.REACT_APP_URL}${client.id}`}/>}
            </section>
             {commerce && <p>Ce qu'on veut faire avec la carte</p>}
        </InfoContain>
    )
}