/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { Login } from './components/Login/Login';

import { SignUpForm } from './components/SignUpForm/SignUpForm';

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('aaaa');
    const localUsers = JSON.parse(localStorage.getItem('users'));

    setUsers(localUsers);
  }, []);

  return (
    <div className="App">
      <SignUpForm />

      {
        users
          ? (
            <Login
              users={users}
            />
          )
          : (
            <p>No users</p>
          )
      }
    </div>
  );
};
