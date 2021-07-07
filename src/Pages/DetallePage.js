
import React, {useState,useEffect} from 'react'
import { Card, CardGroup, Button, Spinner } from 'react-bootstrap';
import Producto from '../Components/Producto'
//import {getProducto} from "../Services/ItemsServices"
import firebase from '../Config/Firebase'


function Home(props){
    const id = props.match.params.id ;
    const [producto,setProducto] = useState ([]);                   
    const [titulo] = useState ("Elija su producto");
    const [loading,setLoading] = useState (true);
    const [form,setForm] = useState({name:'',price:'',description:'',})
    const [formAdd,setFormAdd] = useState({name:'',price:'',description:''})
    
         
    useEffect(
        () => {      
           /*getProducto(id)
            .then(response => {
                   setProducto(response.data[0]);
                   setLoading(false);
                   })*/
                firebase.db.doc("productos/"+id)
                .get()
                .then(doc=>{//console.log("Doc",doc)
                setProducto(doc)
                setLoading(false)
                setForm({name:doc.data().name,price:doc.data().price})
                })
                },
                []
              
            )
       

            const handleChange = (event) => {
                const name = event.target.name
                const value = event.target.value
                setForm({...form,[name]:value})
                //console.log(name,value)
            }
            const handleChangeAdd = (event)=>{
                const name = event.target.name
                const value = event.target.value
                console.log(name,value)
                setFormAdd({...formAdd,[name]:value})
            }
  
            const handleSubmit = (event) => {
                event.preventDefault()
               // console.log(form)
                firebase.db.doc("productos/"+id)
                .set({
                    name:form.name,
                    price:form.price
                },{merge:true})
                .then(doc=>{
                //   console.log("Doc",doc)
                })
                .catch(error=>{
                    //console.log("Error",error)
                })
            }

            const handleDelete = (event)=>{
                event.preventDefault()
                firebase.db.doc("productos/"+id)
                .delete()
                .then(doc=>{
                    console.log("Doc Add",doc)
                })
                .catch(error=>{
                    console.log("error",error)
                })
            }

            const handleSubmitAdd = (event)=>{
                event.preventDefault()
                console.log(formAdd)
                firebase.db.collection("productos")
                .add({
                    name:formAdd.name,
                    price:formAdd.price
                })
                .then(doc=>{
                    console.log("Doc Delete",doc)
                })
                .catch(error=>{
                    console.log("error",error)
                })
            }
    
        if(loading){
            return (
                <div className="Box">
                    <div className="App-header">
                    <h1>Trendy Store Home</h1>
                    <br></br>
                    <Spinner animation="border" variant="light" />
                                       
                    </div> 
                </div>
    
            ) 

        }else{
             return (
                 <div className="Box">
                     <div className="App-header">
           
                     <h1>Trendy Store Home</h1>
                     <br></br>
                     <h1>Colección Otoño-Invierno 2021</h1>
                      <br></br>
                      <h2>{titulo}</h2>
                     <br></br>
                       
                        <div >
                        <CardGroup className="CardGroup">
                        <Producto id={producto.id} data={producto.data()} verDetalle={false} extendida={true}/>
                        
                        <Card className="productCard">
                        <h3>Editar producto</h3>
                        <form className="FormHeader" onSubmit={handleSubmit}>
                            <div>
                                <label>Nombre</label>
                                <input type="text" name="name" value={form.name} onChange={handleChange} ></input>
                            </div>
                            <div>
                                <label>Precio</label>
                                <input type="text" name="price" value={form.price} onChange={handleChange}></input>
                            </div>
                            <Button variant="outline-dark" type="submit" className="Button">Guardar</Button>
                            <Button variant="outline-dark" onClick={handleDelete} className="Button">Eliminar</Button>
                        </form>
                        </Card>
                        <Card className="productCard">
                        <h3>Agregar producto</h3>
                        <form className="FormHeader" onSubmit={handleSubmitAdd}>
                            <div>
                                <label>Nombre</label>
                                <input type="text" name="name" value={formAdd.name} onChange={handleChangeAdd}></input>
                            </div>
                            <div>
                                <label>Precio</label>
                                <input type="number" name="price" value={formAdd.price} onChange={handleChangeAdd}></input>
                            </div>
                            <Button variant="outline-dark" type="submit" className="Button">Guardar</Button>
                        </form>
                        </Card>
                        </CardGroup>
                        </div>
                        
                        
                        </div> 
                    </div>

                ) 
            }




        }


export default Home;