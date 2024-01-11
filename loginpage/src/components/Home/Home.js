import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/button/Button';
import AuthContext from '../../store/auth';

const Home = () => {
  const context=useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={context.onLogout} >LogOut</Button>
    </Card>
  );
};

export default Home;
