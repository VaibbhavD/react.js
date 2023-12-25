import './Expence.css';

function Expenseitems(props){
const month=props.date.toLocaleString('en-US',{month:'long' })
const day=props.date.toLocaleString('en-US',{Day:'1-digit' })
const year=props.date.getFullYear();
    return (
        <>
        <div className="expense-item">
            {/* <div>{month}</div> */}
            <div>{day}</div>
            {/* <div>{year}</div> */}
            <div className="expense-item__description">
                <h3>{props.title}</h3>
                <h3>{props.LocationOfExpenditure}</h3>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
        </>
    )
   }

   export default Expenseitems