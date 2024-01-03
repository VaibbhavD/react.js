import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    const saveExpensedata=(data)=>{
        const expensedata={
            ...data,
            id: Math.random().toString()
        }
        props.addexpense(expensedata)
    }
    return(

        <>
        <ExpenseForm onsavedata={saveExpensedata}/>
        </>
    )
}
export default NewExpense