import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
});
export const AuthContextProvider = (props) => {
  const [token, settoken] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const Login = (token) => {
    settoken(token);
    setisLoggedIn(true);
  };

  const Logout = () => {
    settoken("");
    setisLoggedIn(false);
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
