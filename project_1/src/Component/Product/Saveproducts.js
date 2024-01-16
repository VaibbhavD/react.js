import React from "react";
import Product from "./product";
import './Saveproduct.css'

   const Saveproducts=(props)=>{

    return(
        <div className="productpage">
        <h1 className='title'>Products</h1>
        <ul className="product-list">
            {!props.products.length>0?<p className="no-porduct">No Products</p>:null}
            {props.products.map((product)=>(
                <Product item={product} deletehandler={props.deleteProduct} />
            ))}
        </ul>
        </div>
        
    )
   }

   export default Saveproducts