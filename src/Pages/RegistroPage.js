import React, { useState } from 'react'
import firebase from "../Config/Firebase"

function Registro(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:'',repassword:''})
    const handleSubmit = (event) => {
        event.preventDefault()
       // console.log(form)
        firebase.auth.createUserWithEmailAndPassword(form.email,form.password)
        .then(data=>{//console.log("registro",data.user.uid)
        firebase.db.collection("usuarios").add({
            nombre:form.nombre,
            apellido:form.apellido,
            email:form.email,
            userId:data.user.uid,

        })  
        })
            .then(data=>{console.log(data)})
            .catch(error=>{console.log("Error add",error)})
            .catch(error=>{console.log("Error",error)})
    }


    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setForm({...form,[name]:value})
       // console.log(name,value)
    }

return (
    <div className="Box">
        <div className="Registro">
        <form className="App-header" onSubmit={handleSubmit}>
            <div>
            <label>Nombre</label>
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange}></input>
            </div>
            <div>
            <label>Apellido</label>
            <input type="text" name="apellido" value={form.apellido} onChange={handleChange}></input>
            </div>
            <div>
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div>
            <label>Contraseña</label>
            <input type="password" name="password" value={form.password} onChange={handleChange}></input>
            </div>
            <div>
            <label>Repetir Contraseña</label>
            <input type="password" name="repassword" value={form.repassword} onChange={handleChange}></input>
            </div>
            <button type="submit" className="Button">Registrarse</button>
        </form>    
        </div>
    </div>
)


}

export default Registro;