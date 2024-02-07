import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
});
export const AuthContextProvider = (props) => {
  const initialtoken = localStorage.getItem("token");
  const [token, settoken] = useState(initialtoken);

  const isLoggedIn = !!token;

  const Login = (token) => {
    settoken(token);
    localStorage.setItem("token", token);
  };

  const Logout = () => {
    settoken(null);
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
