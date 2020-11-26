export const userFormInitial = {
  name: '',
  surname: '',
  middleName: '',
  position: '',
  phoneNumber: '',
  login: '',
  password: '',
  confirmPassword: '',
};

export const userFormFields = {
  name: {
    text: 'Name',
    isRequired: true,
    type: 'text',
  },
  surname: {
    text: 'Surname',
    isRequired: true,
    type: 'text',
  },
  login: {
    text: 'Login',
    isRequired: true,
    type: 'text',
  },
  middleName: {
    text: 'Middle name',
    isRequired: false,
    type: 'text',
  },
  position: {
    text: 'Position',
    isRequired: false,
    type: 'text',
  },
  phoneNumber: {
    text: 'Phone number',
    isRequired: false,
    type: 'tel',
  },
  password: {
    text: 'Password',
    isRequired: true,
    type: 'password',
  },
  confirmPassword: {
    text: 'Confirm password',
    isRequired: true,
    type: 'password',
  },
};
