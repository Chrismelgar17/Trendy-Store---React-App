import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import firebase from '../Config/Firebase'


function Login (){
    const [form,setForm] = useState({email:'',password:''})
    const history = useHistory()
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(form)
        firebase.auth.signInUserEmailAndPassword(form.email,form.password)
        .then(data=>{
            console.log("Login ok",data)
            history.push("/")
        })
        .catch(error=>{console.log("Error",error)
        console.log("Error",error.code)})

    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setForm({...form,[name]:value})
        console.log(name,value)
    }

    return(
        <div className="Box">
        <div className="Login">    
            <form onSubmit={handleSubmit} className="App-header">
            <div>
            <label>Email</label>
            <input type="email" onChange={handleChange}></input>
            </div>
            <div>
            <label>Contraseña</label>
            <input type="password" onChange={handleChange}></input>
            </div>
            <div>
            <Link>Olvidé mi contraseña</Link>
            </div>
            <button type="submit" className="Button">Acceder</button>
            
            </form>
        </div>    
        </div>
    );

}

export default Login;