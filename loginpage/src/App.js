import React, { useContext } from 'react';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home';
import MainHeader from './components/Mainheader/MainHeader';
import AuthContext from './store/auth.js';

function App() {

  const context=useContext(AuthContext)

  return (
    <>
      <MainHeader/>
    <main>
      {!context.isLoggedIn && <Login/>}
      {context.isLoggedIn && <Home/>}
    </main>
    </>
  );
}

export default App;
