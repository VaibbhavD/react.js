import './App.css';
import React,{useState} from 'react';
import InputForm from './Component/Form/inputform';
import Saveproducts from './Component/Product/Saveproducts';
import Card from './Component/UI/Card';

function App() {

  const[products,setProducts]=useState([])
  const[Worth,setworth]=useState(null)

  let sum;

   const addproduct=(product)=>{
    setProducts((prevproducts)=>{
      return [...prevproducts,{...product}]
    })
    setworth((prev)=>{ return Math.floor(product.Price)+prev})
   }

   const deleteProduct=(item)=>{
    localStorage.removeItem(item.ProductId)
    setProducts((prevproducts)=>{
      const updateproducts= prevproducts.filter(product=>product.ProductId!==item.ProductId)
      return updateproducts
    })
    setworth((prev)=>{ return prev-item.Price})
   }

  return (
    <Card>
    <InputForm addproduct={addproduct}/>
    <h1>Products</h1>
   <Saveproducts products={products} deleteProduct={deleteProduct}/>
    <h4>Total Worth of Products : Rs <b>{Worth}</b></h4>
    </Card>
  );
}

export default App;
