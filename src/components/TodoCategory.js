import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoCategoryBlock = styled.div`
  border-bottom: 3px solid #eeeeee;
  display: flex;

  .category-text {
    font-size: 18px;
    margin: 10px;
    margin-left: auto;
  }
`;

const SelectBlock = styled.select`
  width: 50px;
  margin: 10px 0 10px 10px;
`;
const Options = styled.option``;

function TodoCategory() {
  const todos = useTodoState();
  const [category, setCategory] = useState(todos[0].category);
  const onChangeCategory = e => {
    setCategory(e.target.value);
  };
  return (
    <TodoCategoryBlock>
      <div className="category-text">
        카테고리별로 보기 :
        <SelectBlock onChange={onChangeCategory}>
          {todos.map(todo => (
            <Options value={todo.category}>{todo.category}</Options>
          ))}
        </SelectBlock>
      </div>
    </TodoCategoryBlock>
  );
}

export default TodoCategory;
