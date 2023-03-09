import { BrowserRouter, Routes,Route } from "react-router-dom";
import { UserContextProvider } from "./Context/User";
import { Connect } from "./Pages/Connect";
import { Body } from "./Styles/Général";

const App = () =>{
  return(
    <BrowserRouter>
      <UserContextProvider>
        <Body>
          <Routes>
            <Route path="/" element={<Connect/>}/>
          </Routes>
        </Body>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App;
