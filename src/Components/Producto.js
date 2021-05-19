import React,{useState} from 'react'

import {Link} from "react-router-dom"

function Producto(props) {
    const id = props.id
    const {price,name,description,stock} = props.data
    const verDetalle = (props.verDetalle!==false?true:false);
    const extendida = (props.extendida===true?true:false);
    const [mensaje,setMensaje] = useState("")
    const comprar = (event) =>{
        setMensaje("Gracias por su Compra")
    }


             
    return (
     <div>
         <div>ID: {id}</div>
         <div>Nombre: {name}</div>
        
        { extendida&&
         <div>Descripción: {description}</div>
        }
         <div>Precio: {price}</div>
         <div>Cantidad Disponible: {stock}</div>
         
         {   verDetalle &&
            <div><Link to={"/producto/"+id}><button className="Button">Detalle</button></Link></div>}
         <div><button className="Button" onClick={comprar}>Comprar</button></div>
        <div>{mensaje}</div> 
                 

    </div>

    )   
}

export default Producto;