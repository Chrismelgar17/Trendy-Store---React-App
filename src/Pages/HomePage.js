
import React, {useState,useEffect} from 'react'
import Producto from '../Components/Producto'
import firebase from 'firebase'
//import {getProductos} from "../Services/ItemsServices"


function Home(props){
    const [productos,setProductos] = useState ([]);                   
    const [titulo,setTitulo] = useState ("Elija su producto");
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
               
                    <h1>Catálogo 2021</h1>
                    <div>Loading...</div>
                    
                    </div> 
                </div>
    
            ) 

        }else{
             return(
                 <div className="Box">
                     <div className="App-header">
           
                      <h1>Catálogo 2021</h1>
                      <br></br>
                      <h2>{titulo}</h2>
                     <br></br>
                        {productos.map(producto=><Producto id={producto.id} data={producto.data()}/>)}
                
                        
                
                        </div> 
                    </div>

                ) 
            }




        }


export default Home;