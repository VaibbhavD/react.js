import React from 'react'
import './ExpenceFilter.css'

function Expencefilter(props){

    const dropdownhandler=(event)=>{
        props.onChangefilter(event.target.value)
    }

    return(
        <div className='expenses-filter'>
        <div className='.expenses-filter__control'>
            <select value={props.selected} onChange={dropdownhandler}>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
            </select>
        </div>
        </div>
    )
}

export default Expencefilter