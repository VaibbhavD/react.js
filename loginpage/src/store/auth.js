import React, { useState ,useEffect} from "react";

const AuthContext=React.createContext({
    isLoggedIn:false,
    onLogin:(email,password)=>{},
    onLogout:()=>{}
})

export const AuthcontextProvider=(props)=>{
    const [loggedIn,setLoggedIn]=useState(false)

    useEffect(()=>{
        const storedata=localStorage.getItem('login')

        if(storedata==='1')
        {
            setLoggedIn(true);
        }
      }
      ,[])

    const Loginhandler=(email, password)=>{
        localStorage.setItem('login','1')
        setLoggedIn(true);
    }

    const Logouthandler=()=>{
        localStorage.removeItem("login")
        setLoggedIn(false);
    }

    return(
        <AuthContext.Provider value={{
            isLoggedIn:loggedIn,
            onLogin:Loginhandler,
            onLogout:Logouthandler
          }}>
            {props.children }
        </AuthContext.Provider>
    )

}

export default AuthContext