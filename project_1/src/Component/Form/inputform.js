import React, { useState } from 'react'
import Card from '../item/card/card'
import classes from './inputform.module.css';

const InputForm=(props)=>{
    const[ProductId,setProductId]=useState('')
    const[Price,setPrice]=useState('')
    const[Name,setName]=useState('')

    const numberhandler=(event)=>{
        setProductId(event.target.value)
    }

    const PriceHandler=(event)=>{
        setPrice(event.target.value)
    }

    const nameHandler=(event)=>{
        setName(event.target.value)
    }

    const SubmitHandler=(event)=>{
        event.preventDefault();
        if(ProductId==='' && Price==='' && Name ==='')
        {
            return;
        }
        else{
         const product={
            ProductId:ProductId,
            Price:Price,
            Name:Name
        }
        localStorage.setItem(ProductId,product)
        props.addproduct(product)
        setProductId('')
        setPrice('')
        setName('')}
    
    }


    return(
        <Card className={classes.login}>
        <form onSubmit={SubmitHandler} className={classes.control}>
            <div>
            <label htmlFor='product'>Product Id</label>
            <input
                type="text"
                placeholder='Product ID'
                id="product"
                value={ProductId}
                onChange={numberhandler}
                />
            </div>
            <div>
            <label htmlFor='price'>Price</label>
            <input
                type="number"
                placeholder='Price'
                id="price"
                value={Price}
                onChange={PriceHandler}
                />
            </div>
            <div>
            <label htmlFor='name'>Product Name</label>
            <input
                type="text"
                placeholder='Product Name'
                id="name"
                value={Name}
                onChange={nameHandler}
                />
            </div>
            <div>
                <button>Add Product</button>
            </div>
        </form>
            </Card>
    )
}
export default InputForm