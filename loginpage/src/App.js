import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home';
import MainHeader from './components/Mainheader/MainHeader';
import AuthLogin from './store/auth.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const validlogin=localStorage.getItem("login")

    if(validlogin==='1')
    {
      setIsLoggedIn(true);
    }
  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('login','1')
  };

  const logoutHandler = () => {
    localStorage.removeItem("login")
    setIsLoggedIn(false);
  };

  return (
    <AuthLogin.Provider value={{
      isLoggedIn:isLoggedIn,
      Login:loginHandler,
      Logout:logoutHandler
    }}>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login/>}
        {isLoggedIn && <Home/>}
      </main>
    </AuthLogin.Provider>
  );
}

export default App;
