import * as yup from 'yup';

export default () => {
  return yup.object().shape({
    name: yup.string().required('Name field is required'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Email field is required'),
    message: yup.string().required('Message field is required')
  });
};
