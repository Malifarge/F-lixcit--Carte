import { BrowserRouter, Routes,Route } from "react-router-dom";
import { UserContextProvider } from "./Context/User";
import { Connect } from "./Pages/Connect";
import { Info } from "./Pages/Info";
import { LoginCommerçant } from "./Pages/LoginCommerçant";
import { Body } from "./Styles/Général";

const App = () =>{
  return(
    <BrowserRouter>
      <UserContextProvider>
        <Body>
          <Routes>
            <Route path="/" element={<Connect/>}/>
            <Route path="/User/:id" element={<Info/>}/>
            <Route path="/Login" element={<LoginCommerçant/>}/>
          </Routes>
        </Body>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App;
