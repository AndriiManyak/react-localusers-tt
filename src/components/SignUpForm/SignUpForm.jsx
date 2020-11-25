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

    console.log(errors);
  };

  const validateForm = () => {
    let isFormValid = true;

    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        console.log(key);
        isFormValid = false;
        setErrors(prevErrors => ({
          ...prevErrors,
          [key]: `${key} is required`,
        }));
        console.log(errors);
      }
    });

    return isFormValid;
  };

  const handleLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users'));

    console.log(users);

    const newUsers = users
      ? [...users, values]
      : [values];

    localStorage.setItem('users', JSON.stringify(newUsers));
  };

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

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
