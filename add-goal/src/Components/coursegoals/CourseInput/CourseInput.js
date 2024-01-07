import React, { useState } from 'react';

import Button from '../../Ui/Buttons/CourseGuide/Button'
import './CourseInput.css';
import '../../Ui/Buttons/CourseGuide/Button.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setisValid]=useState(true)
  const [btnvalid,setbtnvalid]=useState(false)

  const goalInputChangeHandler = event => {
    setisValid(true)
    setbtnvalid(true) 
    setEnteredValue(event.target.value);
    if(event.target.value.length===0)
    {
      setbtnvalid(false) 
    }
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.length===0)
    {
      setisValid(false)
    }
    props.onAddGoal(enteredValue);
    setbtnvalid(false) 
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid? 'isValid':''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={`button ${btnvalid? 'isValid':''}`}  >Add Goal</Button>
    </form>
  );
};

export default CourseInput;