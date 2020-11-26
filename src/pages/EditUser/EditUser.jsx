/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import {
  userFormFields,
  userFormInitial,
} from '../../api/initialStates';

export const EditUser = () => {
  const [values, setValues] = useState(userFormInitial);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const loggedLogin = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(localStorage.getItem(loggedLogin));

    console.log(loggedUser);
    setValues({ ...loggedUser });
  }, []);

  const handleSubmit = (event) => {
    if (validateForm()) {
      handleLocalStorage();
    }
  };

  const validateForm = () => {
    let isFormValid = true;

    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        isFormValid = false;
        setErrors(prevErrors => ({
          ...prevErrors,
          [key]: `${userFormFields[key]} is required`,
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
    <form
      className="SignUpForm"
      onSubmit={handleSubmit}
    >
      <h2>AAA</h2>
      {
        Object.keys(userFormFields).map(key => (
          <React.Fragment key={key}>
            <input
              className="SignUpForm__input"
              type="text"
              name={key}
              value={values[key]}
              placeholder={userFormFields[key]}
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
  );
};
