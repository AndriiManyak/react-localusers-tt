/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './Login.scss';

const initialValues = {
  login: '',
  password: '',
};

export const Login = ({ users }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.login) {
      setErrors(prevErrors => ({
        ...prevErrors,
        login: 'login is required',
      }));
    }

    const user = users.find(currentUser => (
      currentUser.login === values.login
    ));

    console.log(user);

    const isPasswordCorrect = user.password === values.password;

    console.log(isPasswordCorrect);
  };

  return (
    <form
      className="Login"
      onSubmit={handleSubmit}
    >
      <select
        name="login"
        value={values.login}
        onChange={handleChange}
      >
        <option>Choose user</option>
        {
          users.map(user => (
            <option
              key={user.login}
              value={user.login}
            >
              {user.login}
            </option>
          ))
        }
      </select>

      <input
        type="password"
        name="password"
        value={values.password}
        placeholder="password"
        onChange={handleChange}
      />

      <button
        type="submit"
      >
        Lon In
      </button>
    </form>
  );
};
