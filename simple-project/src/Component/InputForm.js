import React from 'react'
import { useState,useRef } from 'react'
import './inputForm.css'
import Error from './Error'

function InputForm(props) {
    const[username,setusername]=useState("")
    const[age,setage]=useState("")
    const [error,seterror]=useState()
    const clgname=useRef();

  const nameInputChangeHandler = event => {
    setusername(event.target.value)
  };

  const ageInputChangeHandler = event => {
    setage(event.target.value)
  };

    const Submithandler=(event)=>{
        event.preventDefault();
        const clg=clgname.current.value;
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
            msg:"Chack all the values and input properly!"
          })
          return;
        }
        // else if(clg.length===0)
        // {
        //   seterror({
        //     title:"Please Enter Vlaid Collage Name",
        //     msg:"Chack all the values and input properly!"

        //   })
        //   return;
        // }
        else{
        props.inputdata({text:username,age:age,clg:clg})
}
    }

    const onConfirm=()=>{
      seterror(null)
    }
    

    return (
      <div className='form' onClick={onConfirm}>
      {error && <Error title={error.title}  msg={error.msg} onconfirm={onConfirm}/>}
    <form onSubmit={Submithandler} >
        <div className={`form-control }`}>
        <input
        type="text"
        placeholder='Username'
        value={username}
        onChange={nameInputChangeHandler}/>

        <input
        type="number"
        placeholder='Age'
        value={age}
        onChange={ageInputChangeHandler}/>

        <input
        type="text"
        placeholder='Collage Name'
        ref={clgname}
        />
</div>
        <button type='submit' className='button' >Add User</button>
    </form>
    </div>
    )
}
export default InputForm