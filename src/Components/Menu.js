import React from "react"
import {Link} from "react-router-dom"

function Menu(){

        return(
        
        <div className="Menu">
            
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/registro">Registro</Link></li>
              <li><Link to="/login">Login</Link></li>   
            </ul>
        </div>
        
        )
    
} 

export default Menu;