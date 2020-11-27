import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
    const loggedUser = localStorage.getItem('loggedUser');
    const localUsers = Object.keys(localStorage);

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

  return (
    <>
      {
        users.length > 0
          ? (
            <>
              <h2>Log In</h2>
              <form
                className="Form"
                onSubmit={handleSubmit}
              >
                <select
                  className="Form__input"
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
                      className="Form__error"
                    >
                      {errors.selectedUser}
                    </span>
                  )
                }

                <input
                  className="Form__input"
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="password"
                  onChange={handleChange}
                />

                {
                  (errors.password) && (
                    <span className="Form__error">
                      {errors.password}
                    </span>
                  )
                }

                <button
                  className="Form__submit-button"
                  type="submit"
                >
                  Lon In
                </button>
              </form>
            </>
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
