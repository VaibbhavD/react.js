import React from 'react'
import Inputitem from './inputitem'
import './Saveinput.css'


function Saveinput(props) {
    

    return(
        <ul className="goal-list">
            {props.input.map((input)=>
              <Inputitem key={input.id} id={input.id} item={input}/>)
             
            }
        </ul>
    )
}

export default Saveinput