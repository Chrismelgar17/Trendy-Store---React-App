import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import firebase from '../Config/Firebase'
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading'
import FormGroup from '../Components/Forms/FormGroup'
import AlertCustom from '../Components/Forms/AlertCustom'


function Login (props){
    const [form,setForm] = useState({email:'',password:''})
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [alert,setAlert] = useState({variant:'',text:''})
    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        console.log(form)
        firebase.auth.signInWithEmailAndPassword(form.email,form.password)
        .then(data=>{
            setLoading(false)
            console.log("Login ok",data)
            props.setUserLogin(true);
            history.push("/")
        })
        .catch(error=>{
            setAlert({variant:'danger',text:"Ha ocurrido un error"})
            setLoading(false)
            console.log("Error",error)
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
            <h1>Iniciar sesión</h1>
            <br></br>    
            <form onSubmit={handleSubmit} className="App-header">
            <div>
            <FormGroup label="Email" type="email" name="email" value={form.email} change={handleChange} />
            </div>
            <div>
            <FormGroup label="Contraseña" type="password" name="password" value={form.password} change={handleChange} />
            </div>
            <div>
            <Link>Olvidé mi contraseña</Link>
            </div>
            <ButtonWithLoading loading={loading}> Acceder </ButtonWithLoading>
            
            <AlertCustom variant={alert.variant} text={alert.text} />
            </form>
        </div>    
        </div>
    );

}

export default Login;