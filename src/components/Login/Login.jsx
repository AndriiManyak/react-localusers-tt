/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const initialValues = {
  login: '',
  password: '',
};

export const Login = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form>
      <input
        type="text"
        name="login"
        value={values.login}
        placeholder="Login"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={values.password}
        placeholder="password"
        onChange={handleChange}
      />
    </form>
  );
};
