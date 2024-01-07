import React from 'react';

import './Button.css';

const Button = props => {
  return (<>
    {props.item.length===0?
    ( <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>)
    :(<button type={props.type} className="button1" onClick={props.onClick}>
    {props.children}
  </button>)}
   
    </>
  );
};

export default Button;