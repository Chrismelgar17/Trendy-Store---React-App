import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import HomePage from "./Pages/HomePage"
import React from 'react'
import RegistroPage from "./Pages/RegistroPage"
import Menu from "./Components/Menu"
import LoginPage from "./Pages/LoginPage"
import DetallePage from "./Pages/DetallePage"

function App() {
  

  return (   
    <BrowserRouter>
    <Menu/>
    <Route path="/" component={HomePage} exact/>
    <Route path="/registro" component={RegistroPage} exact/>
    <Route path="/login" component={LoginPage} exact/>
    <Route path="/producto/:id" component={DetallePage} exact/>
    
    </BrowserRouter>
     
    
  )
}

export default App;
