import React from 'react'
import { useState } from 'react'
import './inputForm.css'
import Error from './Error'

function InputForm(props) {
    const[username,setusername]=useState("")
    const[age,setage]=useState("")
    const [error,seterror]=useState()

  const nameInputChangeHandler = event => {
    setusername(event.target.value)
  };

  const ageInputChangeHandler = event => {
    setage(event.target.value)
  };

    const Submithandler=(event)=>{
        event.preventDefault();
        if(username.trim().length===0)
        {
          seterror({
            title:"Please Enter Vlaid username",
            msg:"Chack all the values and input properly!",
          })
          return;
        }
        else if(age<1)
        {
          seterror({
            title:"Please Enter Vlaid Age",
            msg:"Chack all the values and input properly!",
          })
          return;
        }
        else{
        props.inputdata({text:username,age:age})
}
    }

    const onConfirm=()=>{
      seterror(null)
    }
    

    return (
      <div className='form'>
      {error && <Error title={error.title}  msg={error.msg} onconfirm={onConfirm}/>}
    <form onSubmit={Submithandler} >
        <div className={`form-control }`}>
        <input
        type="text"
        placeholder='Username'
        value={username}
        onChange={nameInputChangeHandler}/><br></br>

        <input
        type="number"
        placeholder='Age'
        value={age}
        onChange={ageInputChangeHandler}/>
</div>
        <button type='submit' className='button' >Add User</button>
    </form>
    </div>
    )
}
export default InputForm