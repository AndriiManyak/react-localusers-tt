/* eslint-disable no-console */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  userFormInitial,
  userFormFields,
} from '../../api/initialStates';
import './SignUpForm.scss';

export const SignUpForm = () => {
  const history = useHistory();
  const [values, setValues] = useState(userFormInitial);
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
    event.preventDefault();

    if (validateForm()) {
      handleLocalStorage();
      history.push('/');
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
    const { confirmPassword, ...localUser } = values;

    localStorage.setItem(`${localUser.login}`, JSON.stringify(localUser));
  };

  return (
    <>
      <h2>Sign Up</h2>

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
    </>
  );
};
