
import React, {useState,useEffect} from 'react'
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
               
                    <div>Catálogo 2021</div>
                    <div>Loading...</div>
                    
                    </div> 
                </div>
    
            ) 

        }else{
             return (
                 <div className="Box">
                     <div className="App-header">
           
                      <h1>Catálogo 2021</h1>
                      <br></br>
                      <div>{titulo}</div>
                     <br></br>
                        <div className="Registro">
                        <Producto id={producto.id} data={producto.data()} verDetalle={false} extendida={true}/>
                        <form className="App-header" onSubmit={handleSubmit}>
                            <div>
                                <label>Nombre</label>
                                <input type="text" name="name" value={form.name} onChange={handleChange} ></input>
                            </div>
                            <div>
                                <label>Precio</label>
                                <input type="text" name="price" value={form.price} onChange={handleChange}></input>
                            </div>
                            <input type="submit" value="Guardar" className="Button"></input>
                            <button onClick={handleDelete} className="Button">Eliminar</button>
                        </form>
                        
                        <h1>Agregar producto</h1>
                        <form className="App-header" onSubmit={handleSubmitAdd}>
                            <div>
                                <label>Nombre</label>
                                <input type="text" name="name" value={formAdd.name} onChange={handleChangeAdd}></input>
                            </div>
                            <div>
                                <label>Precio</label>
                                <input type="number" name="price" value={formAdd.price} onChange={handleChangeAdd}></input>
                            </div>
                            <input type="submit" value="Guardar" className="Button"></input>
                        </form>
                        </div>
                        </div> 
                    </div>

                ) 
            }




        }


export default Home;