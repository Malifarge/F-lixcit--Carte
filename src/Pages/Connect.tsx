import { useState, useEffect } from "react"
import { Input } from "../Components/Input"
import { ErrorContain, Form, FormContain } from "../Styles/Connect"

export const Connect = () =>{

    const [id,setId]= useState<string>("")
    const [error,setError]=useState<string | null>(null)
    const [errorNumber, setErrorNumber]= useState<number>(0)

    useEffect(()=>{
        if(errorNumber>=3){
            setError("Ce n'est pas un identifiant valide: Veuillez contacter le support")
        }
        
    },[errorNumber])

    const regex = /FLX-\d{3}-(ACPB|ADCFSA|HAPCO|VILFAI)-\d{4}/

    const handleSubmit = (e:any)=> {
        e.preventDefault()
        setError(null)
        if(regex.test(id)){
        const idInfo = id.split("-") as string[]
        console.log(idInfo);
        
        }else{
            setError("Ce n'est pas un identifiant valide");
            setErrorNumber(errorNumber+1)
        }
    }

    const handleIdChange = (e:any) =>{
        setId(e.target.value)
    }

    return(
        <FormContain>
            <Form onSubmit={handleSubmit}>
                <Input text="Identifiant" type="text" onChange={handleIdChange}/>
                <button>Valider</button>
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