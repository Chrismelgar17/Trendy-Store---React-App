import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import HomePage from "./Pages/HomePage"
import React, { useState } from 'react'
import RegistroPage from "./Pages/RegistroPage"
import Menu from "./Components/Menu/Index"
import LoginPage from "./Pages/LoginPage"
import DetallePage from "./Pages/DetallePage"
import { Container } from 'react-bootstrap'

function App() {
  
  const [userLogin, setUserLogin ] = useState(false);

  return (
       
    <BrowserRouter>
    <Menu userLogin={userLogin} setUserLogin={setUserLogin} />
    <Route path="/" component={()=><HomePage userLogin={userLogin}/>} exact/>
    <Route path="/registro" component={RegistroPage} exact/>
    <Route path="/login" component={()=><LoginPage setUserLogin={setUserLogin}/>} exact/>
    <Route path="/producto/:id" component={DetallePage} exact/>
    
    </BrowserRouter>
    
    
  )
}

export default App;
