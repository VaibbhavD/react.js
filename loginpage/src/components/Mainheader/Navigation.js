import React from 'react';

import classes from './Navigation.module.css';
import AuthLogin from '../../store/auth';

const Navigation = () => {
  return (
    <AuthLogin.Consumer>
      {(context)=>{
        return(
        <nav className={classes.nav}>
        <ul>
          {context.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {context.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {context.isLoggedIn && (
            <li>
              <button onClick={context.Logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>)
      }}
    </AuthLogin.Consumer>
    
  );
};

export default Navigation;
