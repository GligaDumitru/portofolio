import { useState } from 'react';

export const useForm = (initialState, callback) => {
  const [values, setValues] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    callback();
  };
  const clearValues = () => {
    setValues({
      ...initialState,
    });
  };

  const onChange = ({ target: { value, name } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { onChange, clearValues, onSubmit, values };
};
