import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({
  name,
  surname,
  login,
  position,
}) => (
  <div className="User">
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

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
