/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './Login.scss';

const initialValues = {
  selectedUser: 0,
  password: '',
};

export const Login = ({ users, loginUser }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(value);

    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      localStorage.setItem('loggedUser', values.selectedUser);
      loginUser(values.selectedUser);
    }
  };

  const validateForm = () => {
    let isFormValid = true;

    if (!values.selectedUser) {
      isFormValid = false;

      setErrors(prevErrors => ({
        ...prevErrors,
        selectedUser: 'You need to chose user',
      }));

      return isFormValid;
    }

    if (values.password !== users[values.selectedUser].password) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Incorect password',
      }));

      isFormValid = false;
    }

    return isFormValid;
  };

  return (
    <form
      className="Login"
      onSubmit={handleSubmit}
    >
      <select
        name="selectedUser"
        value={values.selectedUser}
        onChange={handleChange}
      >
        <option>Choose user</option>
        {
          users.map(user => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.login}
            </option>
          ))
        }
      </select>

      {(errors.selectedUser) && (<span>{errors.selectedUser}</span>)}

      <input
        type="password"
        name="password"
        value={values.password}
        placeholder="password"
        onChange={handleChange}
      />

      {(errors.password) && (<span>{errors.password}</span>)}

      <button
        type="submit"
      >
        Lon In
      </button>
    </form>
  );
};
