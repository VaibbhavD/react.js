import Expenseitems from "./Expenseitems";
import { useState } from "react";
import ExpenceFilter  from './ExpenceFilter'

function Expense(props){
    const[year,setyear]=useState('2019')

    const onChangefilter=(filtervalue)=>{
        setyear(filtervalue);
    }

    return (
        <>
        <ExpenceFilter onChangefilter={onChangefilter}  selected={year}/>
        {props.item.map((data)=>(
            <Expenseitems  date={data.date}   title={data.title} price={data.price} Location={data.Location} key={data.id} />
           ))}
           </>
    )
}
export default Expense