import React from "react"
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom"


function Option(props){

        return(
            <Nav.Link as={Link} to={props.path}>{props.label}</Nav.Link>
              )
    
} 

export default Option;