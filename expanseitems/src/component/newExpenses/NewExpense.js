import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";


function NewExpense(props){
    const[display,setdisplay]=useState(false)

    const saveExpensedata=(data)=>{
        const expensedata={
            ...data,
            id: Math.random().toString()
        }
        props.addexpense(expensedata)
    }

    const displayForm=()=>{
        setdisplay(true)
      }

    const Canceldisplay=()=>{
        setdisplay(false)
    }

    return(
        <>
        {display?(<ExpenseForm onsavedata={saveExpensedata} Oncancel={Canceldisplay}/>)
        :
        (<div className="expense-item-display">
          <button onClick={displayForm} className="AddExpBtn">Add Expense</button>
          </div>)
          }
        </>
    )
}
export default NewExpense