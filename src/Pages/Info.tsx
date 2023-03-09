import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/User"

export const Info = ()=>{

    const {idUser} = useContext(UserContext) as any

    const navigate = useNavigate()

    useEffect(()=>{
        if(!idUser){
            navigate("/")
        }
    },[idUser])

    return <h1>Info</h1>
}