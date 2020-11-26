/* eslint-disable no-console */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Login } from './pages/Login/Login';
import { SignUpForm } from './pages/SignUpForm';
import { Users } from './pages/Users/Users';

export const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/signup">
        <SignUpForm />
      </Route>

      <Route path="/users">
        <Users />
      </Route>
    </Switch>
  </div>
);
