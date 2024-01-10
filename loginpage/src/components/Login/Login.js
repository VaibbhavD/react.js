import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/button/Button';


const emailReducer=(state,action)=>{
  if(action.type==='Input_User')
  {
    return {value:action.value,isValid:action.value.includes('@')}
  }
   if(action.type ==='Input_Blur')
  {
    return {value:state.value,isValid:state.value.includes('@')}
  }
  return {value:'',isValid:false}
}

const passwordReducer=(state,action)=>{
  if(action.type==='Input_User')
  {
    return {value:action.value,isValid:action.value.trim().length>6}
  }
   if(action.type ==='Input_Blur')
  {
    return {value:state.value,isValid:state.value.includes('@')}
  }
  return {value:'',isValid:false}

}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [collage, setcollage] = useState("");
  const [collagevalid, setcollageisvalid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const[emailstate,diaspatchemail]=useReducer(emailReducer,{value:'',isVlaid:false})
  const[passwordstate,dispatchpassword]=useReducer(emailReducer,{value:'',isVlaid:false})


  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    diaspatchemail({type:'Input_User',value:event.target.value},)

    setFormIsValid(
      collage.trim().length > 0 && event.target.value.includes('@') && passwordstate.isValid
    );
    return;
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchpassword({type:'Input_User',value:event.target.value},)

    setFormIsValid(
      collage.trim().length > 0 && emailstate.isValid && event.target.value.trim().length > 6
    );
    return; 
  };

  const collagehandler = (event) => {
    setcollage(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 0 && emailstate.isValid && passwordstate.isValid
    );
    return;
  };

  // useEffect(()=>{
  //   const identifier= setTimeout(() => {
  //     console.log("effect")
  //      setFormIsValid(
  //       collage.trim().length > 0 && enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return ()=>{
  //     console.log("cleanup")
  //     clearTimeout(identifier)
  //   }
  // }
  // ,[collage,enteredEmail,enteredPassword])

  const validateEmailHandler = () => {
    // setEmailIsValid(emailstate.isValid);
    diaspatchemail({type:'Input_Blur'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchpassword({type:'Input_Blur'})
  };

  const validatecollageHandler = () => {
    setcollageisvalid(collage.trim().length > 0);
  };

  
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailstate.value, passwordstate.value,collage);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailstate.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailstate.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordstate.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collagevalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="clgname">Collage Name</label>
          <input
            type="text"
            id="clgname"
            value={collage}
            onChange={collagehandler}
           onBlur={validatecollageHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
