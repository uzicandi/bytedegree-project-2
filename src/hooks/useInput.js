import { useState, useCallback } from 'react';

export function useInput(initialValue) {
  const [form, setForm] = useState(
    () =>
      initialValue || {
        title: '',
        amount: 0,
        category: 'meal',
      }
  );

  const handleChangeField = useCallback(e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setForm(initialValue);
  }, [initialValue]);
  console.log('initialValue', initialValue);
  console.log('form', form);
  return {
    form,
    setForm,
    onChangeField: handleChangeField,
    reset: handleReset,
  };
}
