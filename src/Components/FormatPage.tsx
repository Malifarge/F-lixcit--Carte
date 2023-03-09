import { Body } from "../Styles/Général";
import { ChildrenPropsType } from "../Types/Children";
import { Header } from "./Header";

export const FormaPage = ({children}:ChildrenPropsType)=>{
    return(
        <Body>
            <Header/>
            {children}
        </Body>
    )
}