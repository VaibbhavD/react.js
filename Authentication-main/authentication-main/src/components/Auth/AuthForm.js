import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailref = useRef();
  const passwordref = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const Enteredemail = emailref.current.value;
    const Enteredpassword = passwordref.current.value;

    if (isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsZH3qrDtweiZTyYzmdE34My1E-wKNW0A",
        {
          method: "POST",
          body: JSON.stringify({
            email: Enteredemail,
            password: Enteredpassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
        } else {
          return res.json().then((data) => {
            let errormessage = "Authentication Failed !";
            if (data && data.error && data.error.message) {
              errormessage = data.error.message;
            }
            alert(errormessage);
          });
        }
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailref} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordref} required />
        </div>
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
