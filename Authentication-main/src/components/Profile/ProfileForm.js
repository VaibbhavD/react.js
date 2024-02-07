import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import { AuthContext } from "../../Store/Auth-Context";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const PasswordRef = useRef();
  const context = useContext(AuthContext);
  const Navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAsZH3qrDtweiZTyYzmdE34My1E-wKNW0A",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: context.token,
          password: PasswordRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          Navigate("/");
          // alert("Password Changed Successfully !");
        } else {
          res.json().then((data) => {
            let message = "Failed";
            if (data && data.error && data.error.message) {
              message = data.error.message;
            }
            alert(message);
          });
        }
      })
      .catch((err) => {
        alert(err.mesage);
      });
  };

  return (
    <form onSubmit={SubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          ref={PasswordRef}
          id="new-password"
          minLength="7"
          required
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
