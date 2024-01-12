import React from "react";
import Product from "./product";

   const Saveproducts=(props)=>{

    return(
        <ul>
            {!props.products.length>0?<p>No Products</p>:null}
            {props.products.map((product)=>(
                <Product item={product} deletehandler={props.deleteProduct} />
            ))}
        </ul>
    )
   }

   export default Saveproducts