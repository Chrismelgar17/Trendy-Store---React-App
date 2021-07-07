import React from 'react'
import {Alert} from 'react-bootstrap'

function AlertCustom(props){
    const{variant,text} = props
    return(
        <Alert variant={variant}>
    {text}
  </Alert>
    )
}

export default AlertCustom