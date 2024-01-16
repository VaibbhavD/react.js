import React from "react";

const Card=(porps)=>{

    return (
        <div className={`${porps.className}`}>{porps.children}</div>
    )
}
export default Card