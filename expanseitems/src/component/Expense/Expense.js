import Expenseitems from "./Expenseitems";

function Expense(props,Location="none"){

    return (
        <>
        {props.item.map((data)=>(
            <Expenseitems  date={data.date}   title={data.title} price={data.price} Location={data.Location} />
           ))}
           </>
    )
}
export default Expense