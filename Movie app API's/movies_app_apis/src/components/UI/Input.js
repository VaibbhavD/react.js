import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.div}>
      <div>
        <label htmlFor={props.label}>{props.label}</label>
      </div>
      <input
        id={props.title}
        type={props.type}
        className={props.classname}
        {...props}
      />
    </div>
  );
};
export default Input;
