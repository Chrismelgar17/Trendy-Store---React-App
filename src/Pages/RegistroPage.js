import React, { useState } from 'react'
import firebase from "../Config/Firebase"
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading'
import FormGroup from '../Components/Forms/FormGroup'
import AlertCustom from '../Components/Forms/AlertCustom'
import {Row} from 'react-bootstrap'


function Registro(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:'',repassword:''})
    const [loading, setLoading] = useState(false)
    const [alert,setAlert] = useState({variant:'',text:''})
    const handleSubmit = (event) => {
        event.preventDefault()
       // console.log(form)
        setLoading(true)
        firebase.auth.createUserWithEmailAndPassword(form.email,form.password)
        .then(data=>{//console.log("registro",data.user.uid)
        firebase.db.collection("usuarios").add({
            nombre:form.nombre,
            apellido:form.apellido,
            email:form.email,
            userId:data.user.uid,

        })  
        })
            .then(data=>{
                setAlert({variant:'success',text:"Has sido registrado"})
                setLoading(false)
                console.log(data)})
            .catch(error=>{
                setAlert({variant:'danger',text:"Ha ocurrido un error"})
                setLoading(false)
                console.log("Error",error)})
            
    }


    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setForm({...form,[name]:value})
       // console.log(name,value)
    }

return (
    <div className="Box">
        <div  className="App-header">
        <h1>Registrate en Trendy Store</h1>
        <br></br>
        <h2>Por favor, ingresá tus datos</h2>
        <br></br>
        
        <form className="Registro" onSubmit={handleSubmit}>
            <Row>
            <span></span>
            <FormGroup label="Nombre" name="nombre" type="text" placeholder="Ingrese su nombre" value={form.nombre} change={handleChange} />
            <span></span>
            <div className="col-xs-6">
            <FormGroup label="Apellido" name="apellido" type="text" placeholder="Ingrese su apellido" value={form.apellido} change={handleChange} />
            </div>
            </Row>
            <div>
            <FormGroup label="Email" name="email" type="email" placeholder="Ingrese su email" value={form.email} change={handleChange} />
            </div>
            <Row>
            <FormGroup label="Contraseña" name="password" type="password" placeholder="Ingrese su contraseña" value={form.password} change={handleChange} />       
            <br></br>
            <FormGroup label="Confirmar contraseña" name="repassword" type="password" placeholder="Repita su contraseña" value={form.repassword} change={handleChange} />
            </Row>
               </form>  
               <ButtonWithLoading loading={loading} >Registrarse</ButtonWithLoading>
            <AlertCustom variant={alert.variant} text={alert.text} />
       
        </div>
    </div>
)


}

export default Registro;