/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { User } from '../../components/User/User';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const localUsers = [];

    Object.keys(localStorage).forEach((key) => {
      if (key !== 'loggedUser') {
        localUsers.push(JSON.parse(localStorage.getItem(key)));
      }
    });

    setUsers(localUsers);
  }, []);

  return (
    <div>
      { console.log(users)}
      {
        users.map(user => (
          <User
            key={user.id}
            {...user}
          />
        ))
      }
    </div>
  );
};
