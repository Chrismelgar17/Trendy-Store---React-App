import React from 'react'
import {Button, Spinner} from 'react-bootstrap'

function ButtonWithLoading(props){
   const {type,variant,loading} = props
return (
            <Button 
            type={type || "submit"} 
            variant={variant || "dark"} 
            disabled={loading}>
                {
                    loading &&
                    <Spinner animation="border" size="sm"></Spinner>
                }
                
                {props.children}
            </Button>
        
)


}

export default ButtonWithLoading;