import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/About" component={About} />
      <MyRoute exact path="/Login" component={Login} />
      <MyRoute path="/Page404" component={Page404} />
    </Switch>
  );
}
