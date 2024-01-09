import React from 'react'
// import Inputitem from './inputitem'
import './Saveinput.css'
// import { useState } from 'react'

function Saveinput(props) {
    // const[valid,setvalid]=useState(true)

    return(<>
        
        <ul className="goal-list">
            {props.input.map((input)=>

              <li  className="goal-item" key={input.id} >
              Name:{input.text}   Age:{input.age}
          </li>
      )
            }
        </ul>
        </>)
}

export default Saveinput