/* eslint-disable no-console */
import React, { useState } from 'react';

import './SignUpForm.scss';

const initialValues = {
  name: '',
  surname: '',
  middleName: '',
  position: '',
  phoneNumber: '',
  login: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [values, setValues] = useState(initialValues);
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

    // console.log('from valid?', validateForm());

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
          [key]: `${key} is required`,
        }));
      }
    });

    if (values.password !== values.confirmPassword) {
      setErrors(prevErrors => ({
        ...prevErrors,
        passwordConfirmed: false,
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
        Object.keys(values).map(key => (
          <React.Fragment key={key}>
            <input
              type="text"
              name={key}
              value={values[key]}
              placeholder={key}
              onChange={handleChange}
            />
            <span>{errors[key]}</span>
          </React.Fragment>
        ))
      }

      {!errors.passwordConfirmed && (
        <span>Passwords must be </span>
      )}

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
