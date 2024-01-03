import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    const saveExpensedata=(data)=>{
        const expensedata={
            ...data,
            id: Math.random().toString()
        }
        props.addexpense(expensedata)
        console.log("New")
    }
    return(

        <>
        <ExpenseForm onsavedata={saveExpensedata}/>
        </>
    )
}
export default NewExpense