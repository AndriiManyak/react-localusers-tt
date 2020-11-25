/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { Login } from './components/Login/Login';

import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { User } from './components/User/Users';

export const App = () => {
  const [loggedUserId, setLoggedUser] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('aaaa');
    const loggedUser = Number(localStorage.getItem('loggedUser'));

    if (loggedUser) {
      loginUser(loggedUser);
    }

    const userIds = JSON.parse(localStorage.getItem('users'));
    const usersFromStorage = [];

    userIds.forEach((userId) => {
      const localUser = JSON.parse(localStorage.getItem(`user${userId}`));

      usersFromStorage.push(localUser);
    });
    setUsers(usersFromStorage);
  }, []);

  const loginUser = (loggedUser) => {
    setLoggedUser(loggedUser);
  };

  return (
    <div className="App">
      <SignUpForm />

      {
        loggedUserId
          ? (
            <User
              userId={loggedUserId}
              users={users}
            />
          )
          : (
            <Login
              users={users}
              loginUser={loginUser}
            />
          )
      }
    </div>
  );
};
