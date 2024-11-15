import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

export const validateLogin = (email: string, password: string): string | null => {
  try {
    schema.validateSync({ email, password });
    return null;
  } catch (error) {
    return (error as yup.ValidationError).message;
  }
};
