import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const SelectBlock = styled.select`
  width: 50px;
  font-weight: 700;
`;
const Options = styled.option``;

function Select() {
  const todos = useTodoState();
  const category = todos.map(todo => todo.category);
  console.log('category : ', category);
  return (
    <SelectBlock>
      {todos.map(todo => (
        <Options>{todo.category}</Options>
      ))}
    </SelectBlock>
  );
}

export default Select;
