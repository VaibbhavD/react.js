import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props){
  const[enteredtitle,setenteredtitle]=useState('')
  const[enteredAmount,setenteredAmount]=useState('')
  const[enteredDate,setenteredDate]=useState('')
  const[location,setlocation]=useState('')
  const[display,setdisplay]=useState(false)
 
  const titlehandler=(e)=>{
    setenteredtitle(e.target.value)
  }
  const amounthandler=(e)=>{
    setenteredAmount(e.target.value)
  }
  const datehandler=(e)=>{
    setenteredDate(e.target.value)
  }
  const locationhandler=(e)=>{
    setlocation(e.target.value)
  }

   const handlerSubmit=(e)=>{
    e.preventDefault()
    const expesedata=({
    title:enteredtitle,
    price:enteredAmount,
    date:new Date(enteredDate),
    Location:location
    })
    props.onsavedata(expesedata)
    // setenteredtitle('');
    // setenteredAmount('');
    // setenteredDate('');
  }
  const displayForm=()=>{
    setdisplay(true)
  }
  const notdisplayForm=()=>{
    setdisplay(false)
  }
   
    return(<>
      {display?(
        <form onSubmit={handlerSubmit} className="expense-form">
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
            <div className="form-input">
              <label>Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="input"
                  value={location}
                  onChange={locationhandler}
                />
            </div>
            <div className="form-input">
            <button type="submit" className="btn-form">Submit</button>
            </div>
            <div className="form-input">
              <button type="button"  className="btn-form" onClick={notdisplayForm}>Cancel</button>
              </div>
        </form>):(<div className="expense-item">
          <button onClick={displayForm} className="btn-form">Add Expense</button>
          </div>)
          }
        </> 
    )
}
export default ExpenseForm