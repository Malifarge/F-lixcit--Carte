import { BrowserRouter, Routes,Route } from "react-router-dom";
import { FormaPage } from "./Components/FormatPage";
import { UserContextProvider } from "./Context/IdUser";
import { Connect } from "./Pages/Connect";
import { Info } from "./Pages/Info";
import { LoginCommerçant } from "./Pages/LoginCommerçant";

const App = () =>{
  return(
    <BrowserRouter>
      <UserContextProvider>
        <FormaPage>
          <Routes>
            <Route path="/" element={<Connect/>}/>
            <Route path="/User/:id" element={<Info/>}/>
            <Route path="/Login" element={<LoginCommerçant/>}/>
          </Routes>
        </FormaPage>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App;
