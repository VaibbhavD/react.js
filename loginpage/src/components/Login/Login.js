import React, { useContext,useReducer, useState } from 'react';
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
    Context.onLogin(emailstate.value, passwordstate.value);
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
          <Input
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
          <Input
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
          <Input
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
