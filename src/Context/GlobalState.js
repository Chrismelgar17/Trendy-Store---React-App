import React, {useState} from 'react'
import EcommerceContext from './EcommerceContext'

function GlobalState(props){
    const [userLogin,setUserLogin]=useState(localStorage.getItem("login"));
    const [userInfo, setUserInfo]=useState({})
    const loginUser=(user)=>{setUserLogin(true)
            localStorage.getItem("login",true)
            setUserInfo(user)}
    const logoutUser=()=>{setUserLogin(false)
    localStorage.removeItem("login")
    setUserInfo({})}
    const isLogin=()=>{}
return(
    <EcommerceContext.Provider value={{userLogin:userLogin,
        loginUser:loginUser,
        logoutUser:logoutUser,
        userInfo:userInfo
    }}>
    {props.children}
    </EcommerceContext.Provider>
)

}

export default GlobalState;