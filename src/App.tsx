import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Connect } from "./Pages/Connect";
import { Body } from "./Styles/Général";

const App = () =>{
  return(
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/" element={<Connect/>}/>
        </Routes>
      </Body>
    </BrowserRouter>
  )
}

export default App;
