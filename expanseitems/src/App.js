import Expense from './component/Expense/Expense'
import NewExpense from './component/newExpenses/NewExpense';
import React,{useState} from 'react';



function App() {
  
  
    let expens=[
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

    const[exp,setexp]=useState(expens)
    const addExpenseHandler = (expense) => {
      let temp=[...exp,{...expense}]
      setexp(temp)
      console.log(expens)

      // (<h1>Vaibhav</h1>)
    };

      return (
    <>
     <h1>Expense Items</h1>
     <NewExpense addexpense={addExpenseHandler}/>
     <div className='display-items'>
     <Expense item={exp}/>
     </div>
    </>
  )
}

export default App