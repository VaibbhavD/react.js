import ExpenseDate from './ExpenseDate';
import './Expence.css';

function Expenseitems(props){

    return (
        <>
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
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