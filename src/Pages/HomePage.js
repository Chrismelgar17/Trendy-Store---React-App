
import React, {useState,useEffect} from 'react'
import Producto from '../Components/Producto'
import firebase from 'firebase'
import {CardGroup, Spinner} from 'react-bootstrap'
//import {getProductos} from "../Services/ItemsServices"


function Home(props){
    const [productos,setProductos] = useState ([]);                   
    const [titulo/*,setTitulo*/] = useState ("Elija su producto");
    const [loading,setLoading] = useState (true);
        
         
    

   useEffect(
    () => {      
       /*getProductos()
       .then(response => {
               setProductos(response.data);
               setLoading(false);
               })*/
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            //console.log(querySnapshot.docs);
            setLoading(false);
            setProductos(querySnapshot.docs);
            /*querySnapshot.docs.map(doc=>{console.log(doc.data())})*/
            
        })
                 

    })
   
  

    
        if(loading){
            return(
                <div className="Box">
                    <div className="App-header">
                    <h1>Trendy Store Home</h1>
                    <h1>Colección Otoño-Invierno 2021</h1>
                    <br></br>
                    <Spinner animation="border" variant="light" />
                    
                    </div> 
                </div>
    
            ) 

        }else{
             return(
                 <div className="Box">
                     <div className="App-header">
           
                     <h1>Trendy Store Home</h1>
                     <br></br>
                     <h1>Colección Otoño-Invierno 2021</h1>
                      <br></br>
                      <h2>{titulo}</h2>
                     <br></br>
                     <CardGroup className="CardGroup">
                        {productos.map(producto=><Producto id={producto.id} data={producto.data()} userLogin={props.userLogin}/>)}
                    </CardGroup>
                        
                
                        </div> 
                    </div>

                ) 
            }




        }


export default Home;