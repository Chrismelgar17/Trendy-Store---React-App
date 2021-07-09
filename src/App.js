import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import HomePage from "./Pages/HomePage"
import React, { useState } from 'react'
import RegistroPage from "./Pages/RegistroPage"
import Menu from "./Components/Menu/Index"
import LoginPage from "./Pages/LoginPage"
import DetallePage from "./Pages/DetallePage"
import { Container } from 'react-bootstrap'

import GlobalState from './Context/GlobalState'

function App() {
  
  const [userLogin, setUserLogin ] = useState(false);

  return (
    <GlobalState>
    <BrowserRouter>
    <Menu/>
    <Route path="/" component={HomePage} exact/>
    <Route path="/registro" component={RegistroPage} exact/>
    <Route path="/login" component={LoginPage} exact/>
    <Route path="/producto/:id" component={DetallePage} exact/>
    
    </BrowserRouter>
    </GlobalState>
    
    
  )
}

export default App;
