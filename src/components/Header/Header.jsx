import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <div className="Header">
    <nav className="Header__nav">
      <NavLink
        to="/users/edit"
      >
        Edit user
      </NavLink>

      <NavLink
        to="/users/list"
      >
        List of users
      </NavLink>

      <NavLink
        to="/users/text"
      >
        Text form
      </NavLink>
    </nav>
  </div>
);
