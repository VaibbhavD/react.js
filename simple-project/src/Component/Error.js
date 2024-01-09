import React from 'react'
import './Error.css'

function Error(props) {

    return(
        <div>
            <div className="backdrop"  onclick={props.onconfirm}/>
            <div className="modal">
                <header className="header">
                    <h1>{props.title}</h1>
                </header>
                <div className="content">
                    {props.msg}
                </div>
                <footer className="actions">
                    <button onClick={props.onconfirm} className='button'>Okay</button>
                </footer>
            </div>
        </div>
    )
    
}
export default Error