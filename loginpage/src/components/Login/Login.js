import React, { useContext,useReducer, useState,useRef } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/button/Button';
import AuthContext from '../../store/auth';
import Input from '../UI/input/input';


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
    return {value:state.value,isValid:state.value.trim().length>6}
  }
  return {value:'',isValid:false}

}

const Login = (props) => {
  const [collage, setcollage] = useState("");
  const [collagevalid, setcollageisvalid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const[emailstate,diaspatchemail]=useReducer(emailReducer,{value:'',isVlaid:false})
  const[passwordstate,dispatchpassword]=useReducer(passwordReducer,{value:'',isVlaid:false})


  const emailChangeHandler = (event) => {
    diaspatchemail({type:'Input_User',value:event.target.value},)

    setFormIsValid(
      collage.trim().length > 0 && event.target.value.includes('@') && passwordstate.isValid
    );
    return;
  };

  const passwordChangeHandler = (event) => {
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


  const emailRef=useRef()
  const passwordRef=useRef()

 

  const validateEmailHandler = () => {
    diaspatchemail({type:'Input_Blur'})
  };

  const validatePasswordHandler = () => {
    dispatchpassword({type:'Input_Blur'})
  };

  const validatecollageHandler = () => {
    setcollageisvalid(collage.trim().length > 0);
  };


  const Context=useContext(AuthContext)  

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid)
    {
      Context.onLogin(emailstate.value, passwordstate.value);  
    }
    else if(!emailstate.isValid)
    {
      emailRef.current.active()
      console.log("email")
    }
    else{
      passwordRef.current.active()
      console.log("Password")
    }
  };

  

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
          <Input
          ref={emailRef}
          label="Email"
            type="email"
            id="email"
            isValid={emailstate.isValid}
            value={emailstate.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <Input
          ref={passwordRef}
          label="Password"
            type="password"
            id="password"
            isValid={passwordstate.isValid}
            value={passwordstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <Input
          label="Collage"
            type="taxt"
            id="clg"
            isValid={collagevalid}
            value={collage}
            onChange={collagehandler}
            onBlur={validatecollageHandler}
          />
       
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
