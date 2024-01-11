import React,{useRef,useImperativeHandle}from "react";
import classes from '../../Login/Login.module.css';



const Input=React.forwardRef((props,ref) =>{

  const inputRef=useRef()
  const activate=()=>{
    inputRef.current.focus();
  }

  useImperativeHandle(ref,()=>{
    return {
      active:activate
    }
  })

    return(
        <>
        <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor="email">{props.label}</label>
        <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className={`${props.className}`}
        {...props}
        >
            {props.children}
        </input>
        </div>
        </>
    )
})
export default Input