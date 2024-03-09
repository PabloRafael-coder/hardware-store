import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoute from './private-route';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
