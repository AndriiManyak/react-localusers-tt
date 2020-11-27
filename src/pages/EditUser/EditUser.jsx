/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import {
  userFormFields,
  userFormInitial,
} from '../../api/initialStates';

export const EditUser = () => {
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const loggedLogin = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(localStorage.getItem(loggedLogin));

    console.log(loggedUser);
    setValues({
      ...loggedUser,
      confirmPassword: '',
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      handleLocalStorage();
    }
  };

  const validateForm = () => {
    let isFormValid = true;

    Object.keys(values).forEach((key) => {
      if (!values[key] && userFormFields[key].isRequired) {
        isFormValid = false;
        setErrors(prevErrors => ({
          ...prevErrors,
          [key]: `${userFormFields[key].text} is required`,
        }));
      }
    });

    if (values.password !== values.confirmPassword) {
      isFormValid = false;

      setErrors(prevErrors => ({
        ...prevErrors,
        passwordNotConfirmed: true,
      }));
    }

    return isFormValid;
  };

  const handleLocalStorage = () => {
    localStorage.setItem(values.login, JSON.stringify(values));
  };

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

  return (
    <>
      <h2>Edit user</h2>

      {values && (
        <form
          className="SignUpForm"
          onSubmit={handleSubmit}
        >
          {
            Object.keys(userFormFields).map(key => (
              <React.Fragment key={key}>
                <input
                  className="SignUpForm__input"
                  type={userFormFields[key].type}
                  name={key}
                  value={values[key]}
                  placeholder={userFormFields[key].text}
                  onChange={handleChange}
                />
                <span
                  className="SignUpForm__error"
                >
                  {errors[key]}
                </span>
              </React.Fragment>
            ))
          }

          {errors.passwordNotConfirmed && (
            <span
              className="SignUpForm__error"
            >
              Passwords must be equal
            </span>
          )}

          <button
            className="SignUpForm__submit-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}

    </>
  );
};
