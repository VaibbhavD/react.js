import React, { useState } from "react";

const ProductValue=(props)=>{

    const[worth,setworth]=useState(null)
    if(props.products.length>0){
    for (const product of props.products) {
        setworth((prevsum)=>prevsum+product.Price)
    }
}

    return(
        <>
        <h4>Total Worth Of Products{worth}</h4>
        </>
    )
}
export default ProductValue