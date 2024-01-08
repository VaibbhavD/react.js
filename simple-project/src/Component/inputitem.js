import React from "react";
import './inputitem.css';

function Inputitem(props) {

    return(
        <li  className="goal-item" >
            Name:{props.item.text}   Age:{props.item.age}
        </li>
    )
    
}
export default Inputitem