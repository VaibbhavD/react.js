import React, { useState } from "react";
import './ExpenseForm.css';


function ExpenseForm(){
  const[enteredtitle,setenteredtitle]=useState('')
  const[enteredAmount,setenteredAmount]=useState('')
  const[enteredDate,setenteredDate]=useState('')
 
  const titlehandler=(e)=>{
    setenteredtitle(e.target.value)
    console.log(enteredtitle)
  }
  const amounthandler=(e)=>{
    setenteredAmount(e.target.value)
    console.log(enteredAmount)
  }
  const datehandler=(e)=>{
    setenteredDate(e.target.value)
    console.log(enteredDate)
  }

   const handlerSubmit=(e)=>{
    e.preventDefault()
    const expensedata={
    title:enteredtitle,
    amount:enteredAmount,
    date:new Date(enteredDate)
    }
    console.log(expensedata)
   }


    return(
        <form  className="expense-form">
            <div className="form-input">
              <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input"
                  value={enteredtitle}
                  onChange={titlehandler}
                />
            </div>
            <div className="form-input">
            <label>Amount</label>
                <input
                  type="number"
                  placeholder="Amount"
                  className="input"
                  value={enteredAmount}
                  onChange={amounthandler}
                />
            </div>
            <div className="form-input">
            <label>Date</label>
                <input
                  type="date"
                  placeholder="date"
                  className="input"
                  value={enteredDate}
                  onChange={datehandler}
                />
            </div>
            <button type="submit" onClick={handlerSubmit} className="btn-form">Submit</button>
        </form>
    )
}
export default ExpenseForm