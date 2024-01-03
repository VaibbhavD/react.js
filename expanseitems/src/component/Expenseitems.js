import ExpenseDate from './ExpenseDate';
import './Expence.css';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';

const Expenseitems=(props)=>{
  const[data,setdata]=useState(true)
    const submithandle=()=>{
        setdata(false)
    }

  const[title,settitle]=useState(props.title)
    const Updatehandle=()=>{
        settitle("Updated")
    }

  const[expense,setexpense]=useState(props.price)
    const ChangeExpense=()=>{
        setexpense(100)
    }
    return ( data?
        (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title}  price={expense} Location={props.Location}/> 
            <button className="deletebtn" onClick={submithandle}>Delete</button>
            <button className="btn" onClick={Updatehandle}>Update</button>
            <button className="btn" onClick={ChangeExpense}>Next</button>
        </div>
    ):<></>)
   }

   export default Expenseitems