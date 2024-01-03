import Expense from './component/Expense/Expense'
import NewExpense from './component/newExpenses/NewExpense';


function App() {
  
    const expense=[
      {
        date:new Date(2021,11,15),
        title:"car insurance",
        price:100,
        Location:'maruti showroom',
        id:'w'
      },
      {
        date:new Date(2021,3,11),
        title:"Health insurance",
        price:1100,
        Location:'LIC',
        id:'w'
      },
      {
        date:new Date(2021,7,21),
        title:"Stay in hotel",
        price:150,
        Location:'Singapur',
        id:'w'
      },
      { 
        date:new Date(2021,5,17),
        title:"Travel",
        price:1700,
        Location:'Thailand',
        id:'w'
      }
    ]
    const addExpenseHandler = (expense) => {
      console.log(expense)
      expense.add({...expense})
    };

      return (
    <>
     <h1>Expense Items</h1>
     <NewExpense addexpense={addExpenseHandler}/>
     <Expense item={expense}/>
    </>
  )
}

export default App