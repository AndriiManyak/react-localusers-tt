import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = () => (
  <div className="Header">
    <nav className="Header__nav">
      <NavLink
        to="/users/edit"
        activeClassName="Header__link--active"
      >
        Edit user
      </NavLink>

      <NavLink
        to="/users/list"
        activeClassName="Header__link--active"
      >
        List of users
      </NavLink>

      <NavLink
        to="/users/text"
        activeClassName="Header__link--active"
      >
        Text form
      </NavLink>
    </nav>
  </div>
);
