import React, { useState } from "react";
import './ExpenseForm.css';


function ExpenseForm(){
  const[title,enteredtitle]=useState('')
  const[amount,enteredAmount]=useState('')
  const[date,enteredDate]=useState('')
 
  const titlehandler=(e)=>{
    enteredtitle(e.target.value)
    console.log(title)
  }
  const amounthandler=(e)=>{
    enteredAmount(e.target.value)
    console.log(amount)
  }
  const datehandler=(e)=>{
    enteredDate(e.target.value)
    console.log(date)
  }

    return(
        <form className="expense-form">
            <div className="form-input">
              <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input"
                  value={title}
                  onChange={titlehandler}
                />
            </div>
            <div className="form-input">
            <label>Amount</label>
                <input
                  type="number"
                  placeholder="Amount"
                  className="input"
                  value={amount}
                  onChange={amounthandler}
                />
            </div>
            <div className="form-input">
            <label>Date</label>
                <input
                  type="date"
                  placeholder="date"
                  className="input"
                  value={date}
                  onChange={datehandler}
                />
            </div>
            <button className="btn-form">Submit</button>
        </form>
    )
}
export default ExpenseForm