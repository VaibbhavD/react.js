import Expenseitems from "./Expenseitems";
import { useState } from "react";
import ExpenceFilter  from './ExpenceFilter'

function Expense(props){
    const[year,setyear]=useState("2021")

    const FilterHandler=filtervalue=>{
        setyear(filtervalue)
    };
    const FilterExpences=props.item.filter(expence=>{
        return expence.date.getFullYear().toString() === year
    })
    
    return (
        <>
        <ExpenceFilter onChangefilter={FilterHandler}  selected={year}/>
        {FilterExpences.map((data)=>(
             <Expenseitems  date={data.date}   title={data.title} price={data.price} Location={data.Location} key={data.id} />
        ))}
           </>
    )
}
export default Expense