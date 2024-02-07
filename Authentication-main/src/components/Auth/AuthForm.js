import { useState, useRef, useContext } from "react";
import { AuthContext } from "../../Store/Auth-Context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setloading] = useState(false);
  const emailref = useRef();
  const passwordref = useRef();
  const context = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    setloading(true);

    const Enteredemail = emailref.current.value;
    const Enteredpassword = passwordref.current.value;

    let Url = "";

    if (isLogin) {
      Url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsZH3qrDtweiZTyYzmdE34My1E-wKNW0A";
    } else {
      Url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsZH3qrDtweiZTyYzmdE34My1E-wKNW0A";
    }

    fetch(Url, {
      method: "POST",
      body: JSON.stringify({
        email: Enteredemail,
        password: Enteredpassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        let message = "Login Successfully !";
        if (res.ok) {
          res.json().then((data) => {
            if (isLogin) {
              context.Login(data.idToken);
            }
          });
          alert(message);
          setloading(false);
        } else {
          return res.json().then((data) => {
            let message = "Authentication Failed !";
            if (data && data.error && data.error.message) {
              message = data.error.message;
            }
            alert(message);
            setloading(false);
          });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const SpinLoader = (
    <div className={classes.ldsring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

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
          <button type="submit">
            {loading === true ? (
              <>{SpinLoader}</>
            ) : isLogin ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </button>
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
