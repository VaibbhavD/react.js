import React from "react";
import './ExpenseForm.css';


function ExpenseForm(){
 
  const titlehandler=(e)=>{
    console.log(e.target.value)
  }
  const amounthandler=(e)=>{
    console.log(e.target.value)
  }
  const datehandler=(e)=>{
    console.log(e.target.value)
  }

    return(
        <form className="expense-form">
            <div className="form-input">
              <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input"
                  onChange={titlehandler}
                />
            </div>
            <div className="form-input">
            <label>Amount</label>
                <input
                  type="number"
                  placeholder="Amount"
                  className="input"
                  onChange={amounthandler}
                />
            </div>
            <div className="form-input">
            <label>Date</label>
                <input
                  type="date"
                  placeholder="date"
                  className="input"
                  onChange={datehandler}
                />
            </div>
            <button className="btn-form">Submit</button>
        </form>
    )
}
export default ExpenseForm