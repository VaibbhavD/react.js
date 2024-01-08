import React from 'react'
import { useState } from 'react'
import './inputForm.css';

function InputForm(props) {
    const[username,setusername]=useState("")
    const[age,setage]=useState("")
    const [isValid,setisValid]=useState(true)

  const nameInputChangeHandler = event => {
    setusername(event.target.value)
  };

  const ageInputChangeHandler = event => {
    setage(event.target.value)
  };

    const Submithandler=(event)=>{
        event.preventDefault();
        props.inputdata({text:username,age:age})
    }
    

    return (<>
    <form onSubmit={Submithandler}>
        <div className={`form-control ${!isValid? 'isValid':''}`}>
        <input
        type="text"
        placeholder='Username'
        onChange={nameInputChangeHandler}/>

        <input
        type="number"
        placeholder='Username'
        onChange={ageInputChangeHandler}/>
</div>
        <button type='submit' >Add User</button>
    </form>
    </>

    )
}
export default InputForm