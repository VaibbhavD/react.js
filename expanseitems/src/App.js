import Expenseitems from "./component/Expenseitems"
function App() {
  
    const arr=[
      {
        date:new Date(2021,11,15),
        title:"car insurance",
        price:100,
        LocationOfExpenditure:'maruti showroom'
      },
      {
        date:new Date(2021,3,11),
        title:"Health insurance",
        price:1100,
        LocationOfExpenditure:'LIC'
      },
      {
        date:new Date(2021,7,21),
        title:"Stay in hotel",
        price:150,
        LocationOfExpenditure:'Singapur'
      },
      { 
        date:new Date(2021,5,17),
        title:"Travel",
        price:1700,
        LocationOfExpenditure:'Thailand'
      }
    ]
      return (
    <>
     <h1>Let's get Strated</h1>
    <Expenseitems date={arr[0].date}   title={arr[0].title} price={arr[0].price} LocationOfExpenditure={arr[0].LocationOfExpenditure}></Expenseitems>
    <Expenseitems date={arr[1].date}   title={arr[1].title} price={arr[1].price} LocationOfExpenditure={arr[1].LocationOfExpenditure}></Expenseitems>
    <Expenseitems date={arr[2].date}   title={arr[2].title} price={arr[2].price} LocationOfExpenditure={arr[2].LocationOfExpenditure}></Expenseitems>
    <Expenseitems date={arr[3].date}   title={arr[3].title} price={arr[3].price} LocationOfExpenditure={arr[3].LocationOfExpenditure}></Expenseitems>
    </>
  )
}

export default App