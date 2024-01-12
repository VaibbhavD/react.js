import React from "react";

const Product=(props)=>{

    const deletehandler=()=>{
        props.deletehandler(props.item)
    }

    return(
        <li key={props.item.ProductId}>
                    {props.item.ProductId}  {props.item.Price}  {props.item.Name} 
                    <button onClick={deletehandler}>Delete</button>
                </li>
    )
}
export default Product