import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthLogin from '../../store/auth';

const Navigation = () => {

  const context=useContext(AuthLogin);
  return (
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
      </nav>
  );
};

export default Navigation;
