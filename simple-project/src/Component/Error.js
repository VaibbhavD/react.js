import React from 'react'
import './Error.css'

function Error(props) {

    return(
        <div>
            <div className="backdrop"  onclick={props.onconfirm}/>
            <div className="modal">
                <header className="header">
                    <h3>{props.title}</h3>
                </header>
                <main className="content">
                    <p>{props.msg}</p>
                </main>
                <footer className="actions">
                    <button onClick={props.onconfirm} className='button'>Okay</button>
                </footer>
            </div>
        </div>
    )
    
}
export default Error