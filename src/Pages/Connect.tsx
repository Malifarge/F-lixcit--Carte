/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "../Components/Input"
import { UserContext } from "../Context/IdUser"
import { ErrorContain, Form, FormContain } from "../Styles/Connect"
import { Klein } from "../Styles/Couleur"
import { ButtonStyle } from "../Styles/Général"

export const Connect = () =>{

    const [id,setId]= useState<string>("")
    const [error,setError]=useState<string | null>(null)
    const [errorNumber, setErrorNumber]= useState<number>(0)

    const {setIdUser,infoIdUser,idUser} = useContext(UserContext) as any

    const navigate = useNavigate()

    useEffect(()=>{
        if(errorNumber>=3){
            setError("Ce n'est pas un identifiant valide: Veuillez contacter le support")
        }
        
    },[errorNumber])

    useEffect(()=>{
        if(infoIdUser){
            navigate(`/User/${idUser}`)
        }
    },[infoIdUser])

    const regex = /FLX-(ACT|HBT|SJR)-\d{3}-(ACPB|ADCFSA|HAPCO|VILFAI)-\d{4}/

    const handleSubmit = (e:any)=> {
        e.preventDefault()
        setError(null)
        if(regex.test(id)){
        setIdUser(id);
        
        }else{
            setError("Ce n'est pas un identifiant valide");
            setErrorNumber(errorNumber+1)
        }
    }
    
    return(
        <FormContain>
            <Form onSubmit={handleSubmit}>
                <Input text="Identifiant" type="text" onChange={(e:any)=>setId(e.target.value)}/>
                <ButtonStyle color={Klein}>Valider</ButtonStyle>
            </Form>
            <div>
                {error &&
                    <ErrorContain>
                        <small>{error}</small>
                    </ErrorContain>
                }
            </div>
        </FormContain>

    )
}