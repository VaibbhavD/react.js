import React from "react";
import './product.css'

const Product=(props)=>{

    const deletehandler=()=>{
        props.deletehandler(props.item)
    }

    return(
        <li className="product">
                   <p>ID- {props.item.ProductId} </p>   <p>Price- Rs.{props.item.Price}</p> <p>Name- {props.item.Name}</p> 
                    <button onClick={deletehandler} className="btn">Delete</button>
                </li>
    )
}
export default Product