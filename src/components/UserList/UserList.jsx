/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

export const UserList = ({ users }) => (
  <div>
    {console.log(users)}
    {
      users.map(user => (
        <div>
          <h3>{`${user.name} ${user.surname}`}</h3>
          <p>{user.position}</p>
        </div>
      ))
    }
  </div>
);
