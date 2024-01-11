import React from "react";

function Input(props) {

    return(
        <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className={`${props.className}`}
        {...props}
        >
            {props.children}
        </input>
    )
}
export default Input