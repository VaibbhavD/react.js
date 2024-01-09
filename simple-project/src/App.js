import './App.css';
import Saveinput from './Component/Saveinputs';
import InputForm from './Component/InputForm';
import { useState } from 'react';

function App() {

  const [input, setinputs] = useState([
    { text: 'Rahul Patil!', age:26,id: 'g1',clg:"IIT BomBay"},
    { text: 'Saurabh Nalvade!', age:25,id: 'g2',clg:"Univarsity of  Karnataka"}
  ]);

  const inputdata=(input)=>{
    setinputs((previnput)=>{
      const update=[...previnput];
      update.unshift({text:input.text,age:input.age,clg:input.clg ,id:Math.random().toString()})
      return update;
    })
  }
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if(input.length>0){
    content=(<Saveinput input={input}/>
  )}

  return (
  <>
  <section id='goal-form'> <InputForm inputdata={inputdata} /></section>
  <section id="goals"> {content} </section>
   
    
    </>
  )
}

export default App;
