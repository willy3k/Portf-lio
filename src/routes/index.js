import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Explication from '../pages/Explication';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/About" component={About} />
      <MyRoute exact path="/Login" component={Contact} />
      <MyRoute exact path="/Explication" component={Explication} />
    </Switch>
  );
}
