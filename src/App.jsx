/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { Login } from './components/Login/Login';

import { SignUpForm } from './components/SignUpForm/SignUpForm';

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('aaaa');
    const userIds = JSON.parse(localStorage.getItem('users'));
    const usersFromStorage = [];

    userIds.forEach((userId) => {
      const localUser = JSON.parse(localStorage.getItem(`user${userId}`));

      usersFromStorage.push(localUser);
    });
    setUsers(usersFromStorage);
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
