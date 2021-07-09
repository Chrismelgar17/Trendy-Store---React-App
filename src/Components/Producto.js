import React,{useState} from 'react'
import {Card, Button} from 'react-bootstrap' 
import {Link} from "react-router-dom"
import EcommerceContext from '../Context/EcommerceContext'

function Producto(props) {
    const id = props.id
    const {price,name,description,stock,sku,img} = props.data
    const verDetalle = (props.verDetalle!==false?true:false);
    const extendida = (props.extendida===true?true:false);
    const [mensaje,setMensaje] = useState("")
    const comprar = (event) =>{
        setMensaje("Gracias por su Compra")
    }


             
    return (
        <EcommerceContext.Consumer>
            {context=><div>
         
         <Card className="productCard" style={{ width: '15rem', height:'30rem' }}>
 
             <Card.Img variant="top" src={img} style={{ width: '10rem' , height:'10rem' }} />
            <Card.Body>
                <Card.Text style={{fontSize:'1.5rem'}}>$ {price}</Card.Text>
                <Card.Title style={{fontSize:'1rem'}}>{name}</Card.Title>
                <Card.Text style={{fontSize:'0.8rem'}}>Cantidad Disponible: {stock}</Card.Text>

                { extendida&& <Card.Text style={{fontSize:'0.8rem'}}>ID: {id}</Card.Text>}
                { extendida&& <Card.Text style={{fontSize:'0.8rem'}}>Descripción: {description}</Card.Text>}
                { extendida&& <Card.Text style={{fontSize:'0.8rem'}}>SKU: {sku}</Card.Text>}
                                                
                { context.userLogin &&
                <Button variant="outline-dark" style={{width:'120px'}} className="Button" onClick={comprar}>Comprar</Button>}

                { verDetalle &&
                <Link to={"/producto/"+id}>
                    <Button variant="outline-dark" style={{width:'120px'}} className="Button">Ver más</Button>
                    </Link>}
                    <Card.Text>{mensaje}</Card.Text>
                </Card.Body>
            </Card>
            

    </div>
            }


     
    </EcommerceContext.Consumer>
    )   
}

export default Producto;