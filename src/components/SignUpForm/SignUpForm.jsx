/* eslint-disable no-console */
import React, { useState } from 'react';

import {
  signUpFormInitial,
  formFields,
} from '../../api/initialStates';
import './SignUpForm.scss';

export const SignUpForm = () => {
  const [values, setValues] = useState(signUpFormInitial);
  const [errors, setErrors] = useState({});

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
          [key]: `${formFields[key]} is required`,
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
    // const users = JSON.parse(localStorage.getItem('users'));
    const users = JSON.parse(localStorage.getItem('users') || '0');

    console.log(users);

    if (users === 0) {
      const newId = 1;
      const userToSave = {
        ...values,
        id: newId,
      };
      // saveToLocalStorage(newId);

      localStorage.setItem('users', JSON.stringify([newId]));
      localStorage.setItem(`user${newId}`, JSON.stringify(userToSave));
    } else {
      console.log(users);
      const newId = users[users.length - 1] + 1;

      const userToSave = {
        ...values,
        id: newId,
      };

      localStorage.setItem('users', JSON.stringify([...users, newId]));
      localStorage.setItem(`user${newId}`, JSON.stringify(userToSave));

      console.log(newId);
    }
  };

  // const saveToLocalStorage = (id) => {
  //   localStorage.setItem('users', JSON.stringify([id]));
  //   localStorage.setItem(`user${id}`, JSON.stringify([id]));
  // };

  return (
    <form
      className="SignUpForm"
      onSubmit={handleSubmit}
    >
      {
        Object.keys(formFields).map(key => (
          <React.Fragment key={key}>
            <input
              className="SignUpForm__input"
              type="text"
              name={key}
              value={values[key]}
              placeholder={formFields[key]}
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
