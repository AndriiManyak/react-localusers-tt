/* eslint-disable react/prop-types */
import React from 'react';

export const User = ({
  name,
  surname,
  login,
  position,
}) => (
  <div>
    <h3>{`${name} ${surname}`}</h3>
    <p>
      <span>Login: </span>
      {login}
    </p>
    <p>
      <span>Position: </span>
      {position}
    </p>
  </div>
);
