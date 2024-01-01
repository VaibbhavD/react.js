import ExpenseDate from './ExpenseDate';
import './Expence.css';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';

const Expenseitems=(props)=>{
  const[data,setdta]=useState(true)
    const submithandle=()=>{
        setdta(false)
    }
    return ( data?
        (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title}  price={props.price} Location={props.Location}/> 
            <button className="deletebtn" onClick={submithandle}>Delete</button>
        </div>
    ):<></>)
   }

   export default Expenseitems