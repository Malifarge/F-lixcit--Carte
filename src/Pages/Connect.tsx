import { useState } from "react"
import { Input } from "../Components/Input"
import { Form } from "../Styles/Connect"

export const Connect = () =>{

    const [id,setId]= useState<string>("")

    const handleSubmit = (e:any)=> {
        e.preventDefault()
        const idInfo = id.split("-") as string[]
        console.log(idInfo);
        
    } 

    const handleIdChange = (e:any) =>{
        setId(e.target.value)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Input text="Identifiant" type="text" onChange={handleIdChange}/>
            <button>Valider</button>
        </Form>
    )
}