import Expenseitems from "./component/Expenseitems"
function App() {
  
    const arr=[
      {
        date:new Date(2021,11,15),
        title:"car insurance",
        price:100,
        Location:'maruti showroom'
      },
      {
        date:new Date(2021,3,11),
        title:"Health insurance",
        price:1100,
        Location:'LIC'
      },
      {
        date:new Date(2021,7,21),
        title:"Stay in hotel",
        price:150,
        Location:'Singapur'
      },
      { 
        date:new Date(2021,5,17),
        title:"Travel",
        price:1700,
        Location:'Thailand'
      }
    ]

      return (
    <>
     <h1>Let's get Strated</h1>
    <Expenseitems date={arr[1].date}   title={arr[1].title} price={arr[1].price} Location={arr[1].Location} ></Expenseitems>
    <Expenseitems date={arr[0].date}   title={arr[0].title} price={arr[0].price} Location={arr[0].Location} ></Expenseitems>
    <Expenseitems date={arr[2].date}   title={arr[2].title} price={arr[2].price} Location={arr[2].Location} ></Expenseitems>
    <Expenseitems date={arr[3].date}   title={arr[3].title} price={arr[3].price} Location={arr[3].Location} ></Expenseitems>
    </>
  )
}

export default App