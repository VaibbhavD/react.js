import ExpenseDate from './ExpenseDate';
import './Expence.css';
import ExpenseDetails from './ExpenseDetails';

function Expenseitems(props){

    return (
        <>
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title}  price={props.price} Location={props.Location}/> 
        </div>
        </>
    )
   }

   export default Expenseitems