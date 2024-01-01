import './Expence.css';
import {useState} from 'react'

const ExpenseDetails=(props)=>{
      
    return (
    <div className="expense-item__description">
                <h3 className="title-div">{props.title}</h3>
                <h3 className="location-div">{props.Location}</h3>
                <div className="expense-item__price">${props.price}</div>
               
            </div> )
}
export default ExpenseDetails