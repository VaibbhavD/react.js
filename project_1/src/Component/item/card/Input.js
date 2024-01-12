import React from "react";

const Input=(props)=>{

    return(
                <div>
                <label htmlFor={props.id}>Product Id</label>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    id={props.id}
                    value={props.value}
                    {...props}
                    />
                </div>
    )
}