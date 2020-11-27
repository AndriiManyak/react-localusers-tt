/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.scss';

const initialValues = {
  selectedUser: '',
  password: '',
};

export const Login = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const [loggedUser, ...localUsers] = Object.keys(localStorage);

    if (loggedUser) {
      history.push('/users');
    }

    setUsers(localUsers);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

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
      history.push('/users');
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

    const user = JSON.parse(localStorage.getItem(values.selectedUser));

    if (values.password !== user.password) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Incorect password',
      }));

      isFormValid = false;
    }

    return isFormValid;
  };

  console.log(users.length);

  return (
    <>
      {
        users.length > 0
          ? (
            <form
              className="Login"
              onSubmit={handleSubmit}
            >
              <select
                className="Login__input"
                name="selectedUser"
                value={values.selectedUser}
                onChange={handleChange}
              >
                <option value="">Choose user</option>
                {
                  users.map(user => (
                    <option
                      key={user}
                      value={user}
                    >
                      {user}
                    </option>
                  ))
                }
              </select>

              {
                (errors.selectedUser) && (
                  <span
                    className="Login__error"
                  >
                    {errors.selectedUser}
                  </span>
                )
              }

              <input
                className="Login__input"
                type="password"
                name="password"
                value={values.password}
                placeholder="password"
                onChange={handleChange}
              />

              {
                (errors.password) && (
                  <span className="Login__error">
                    {errors.password}
                  </span>
                )
              }

              <button
                className="Login__submit-button"
                type="submit"
              >
                Lon In
              </button>
            </form>
          )
          : (
            <>
              <h2>
                There are no users in database. Please sign up
              </h2>
              <Link to="/signup">
                Sign up
              </Link>
            </>
          )
      }
    </>
  );
};
