import React from "react"
import { Nav, Navbar } from "react-bootstrap";
//import {Link} from "react-router-dom"
import Option from './Option.js';
import EcommerceContext from "../../Context/EcommerceContext.js";

function Menu(props){

        return(
          <EcommerceContext.Consumer>
          {
              context=>
        <div >
            <Navbar fixed="top" className="Menu" bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/#home">
              <img alt=""
              src="https://image.flaticon.com/icons/png/512/776/776623.png"
              width="30"
              height="30"
              className="d-inline-block align-center"/>
                Trendy Store</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" >
                  <Nav className="ml-auto">
                    {context.userLogin&&
                    <>
                    <Navbar.Text>{context.userInfo.email} </Navbar.Text>
                    <Option className="Option" path="/" label="Inicio" />
                    <Nav.Link onClick={()=>context.logoutUser(false)}>Salir</Nav.Link>
                    </>}
                    {!context.userLogin&&
                    <>
                    <Option className="Option" path="/registro" label="Registro" />
                  <Option className="Option" path="/login" label="Login" />
                  </>}
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
           
           
        </div>
        }
        </EcommerceContext.Consumer>
        )
    
} 

export default Menu;