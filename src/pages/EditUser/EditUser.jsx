/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import {
  userFormFields,
} from '../../api/initialStates';

export const EditUser = () => {
  const history = useHistory();
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState({});
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const loggedLogin = localStorage.getItem('loggedUser');

    console.log(loggedLogin);

    if (!loggedLogin) {
      history.push('/');
    }

    const loggedUser = JSON.parse(localStorage.getItem(loggedLogin));

    setValues({
      ...loggedUser,
      confirmPassword: '',
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      handleLocalStorage();
      setIsChanged(true);
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
          className="Form"
          onSubmit={handleSubmit}
        >
          {
            Object.keys(userFormFields).map(key => (
              <React.Fragment key={key}>
                <input
                  className={
                    classNames(
                      { Form__input: true },
                      { 'Form__input--error': errors[key] },
                    )
                  }
                  type={userFormFields[key].type}
                  name={key}
                  value={values[key]}
                  placeholder={userFormFields[key].text}
                  onChange={handleChange}
                />
                <span
                  className="Form__error"
                >
                  {errors[key]}
                </span>
              </React.Fragment>
            ))
          }

          {errors.passwordNotConfirmed && (
            <span
              className="Form__error"
            >
              Passwords must be equal
            </span>
          )}

          <button
            className="Form__submit-button"
            type="submit"
          >
            Save
          </button>

          {isChanged && (<h2>Changes is saved</h2>)}
        </form>
      )}

    </>
  );
};
