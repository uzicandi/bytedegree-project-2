import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const SelectBlock = styled.select`
  width: 50px;
  margin: 10px 0 10px 10px;
`;
const Options = styled.option``;

function Select() {
  const todos = useTodoState();
  const [category, setCategory] = useState('');
  const onChangeCategory = e => {
    debugger;
    setCategory(e.target.value);
  };

  return (
    <SelectBlock onChange={onChangeCategory}>
      {todos.map(todo => (
        <Options>{todo.category}</Options>
      ))}
    </SelectBlock>
  );
}

export default Select;
