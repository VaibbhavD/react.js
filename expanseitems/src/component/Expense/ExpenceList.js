import React from "react";
import Expenseitems from "./Expenseitems";
import './Expence.css';

function ExpenseList(props){
    if(props.item.length===0){
        return(
        <div className="expense-item">
                <span>No Expences</span>
        </div> ) 
    }

    return (
        <div >
            {props.item.map((expense)=>(
                <Expenseitems 
                key={expense.id}
                 title={expense.title}
                 price={expense.price}
                 date={expense.date}
                 Location={expense.Location}/>
            ))}
        </div>
    )
}
export default ExpenseList