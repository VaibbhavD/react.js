import Expense from './component/Expense/Expense'
import NewExpense from './component/newExpenses/NewExpense';
import React,{useState} from 'react';


const Dummy_expens=[
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
    id:'e'
  },
  {
    date:new Date(2021,7,21),
    title:"Stay in hotel",
    price:150,
    Location:'Singapur',
    id:'r'
  },
  { 
    date:new Date(2021,5,17),
    title:"Travel",
    price:1700,
    Location:'Thailand',
    id:'t'
  }
]

function App() {
    const[expences,setexpences]=useState(Dummy_expens)

    const addExpenseHandler = (expense) => {
      setexpences((prevexpences)=>{
        return [expense,...prevexpences]
      })
    };

      return (
    <>
     <NewExpense addexpense={addExpenseHandler}/>
     <hr></hr>
     <div className='display-items'>
     <Expense item={expences}/>
     </div>
    </>
  )
}

export default App