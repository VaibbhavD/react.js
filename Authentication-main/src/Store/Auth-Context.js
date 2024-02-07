import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
});
export const AuthContextProvider = (props) => {
  const [token, settoken] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const Login = (token) => {
    settoken(token);
    setisLoggedIn(true);
    localStorage.setItem("token", token);
  };

  const Logout = () => {
    settoken(null);
    setisLoggedIn(false);
    localStorage.removeItem("token");
  };

  const context = {
    token: token,
    isLoggedIn: isLoggedIn,
    Login: Login,
    Logout: Logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
