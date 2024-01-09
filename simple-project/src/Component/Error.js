import React, { Fragment } from 'react'
import './Error.css'
import ReactDOM from 'react-dom'



const Backdrop=(props)=>{
  return  <div className="backdrop"  onclick={props.onconfirm}/>
}

const Modaloverlay=(props)=>{
    return(
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
    )
}


function Error(props) {

    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onconfirm}/>,document.getElementById('backdro-root'))}
            {ReactDOM.createPortal(<Modaloverlay title={props.title} msg={props.msg}  />,document.getElementById('modal-root'))}
        </Fragment>
        
    )
    
}
export default Error

