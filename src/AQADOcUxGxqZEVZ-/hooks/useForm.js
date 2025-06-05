import { useState } from 'react';

export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return [formState, handleInputChange];
};