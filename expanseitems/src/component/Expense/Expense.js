import { useState } from "react";
import ExpenceFilter  from './ExpenceFilter'
import ExpenseList from "./ExpenceList";
import ExpenseChart from './ExpenseChart'

function Expense(props){
    const[year,setyear]=useState("2021")

    const FilterHandler=filtervalue=>{
        setyear(filtervalue)
    };
    const FilterExpences=props.item.filter(expence=>{
        return expence.date.getFullYear().toString() === year
    })

    return (
        <div className="">
         <ExpenseChart expences={FilterExpences}/>
        <ExpenceFilter onChangefilter={FilterHandler}  selected={year}/>
        <ExpenseList item={FilterExpences}/>
        </div>
    )
}
export default Expense