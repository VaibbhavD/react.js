import './Expence.css';

const ExpenseDetails=(props)=>{
      
    return (
    <div className="expense-item__description">
                <h3>{props.title}</h3>
                <h3>{props.Location}</h3>
                <div className="expense-item__price">${props.price}</div>
            </div>
    )
}
export default ExpenseDetails