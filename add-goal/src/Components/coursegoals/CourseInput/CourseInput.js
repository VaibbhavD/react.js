import React, { useState } from 'react';

import Button from '../../Ui/Buttons/CourseGuide/Button'
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={(e)=>setEnteredValue(e.target.value)} />
      </div>
      <Button type="submit" item={enteredValue}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;