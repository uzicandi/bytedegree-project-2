import React from 'react';
import styled from 'styled-components';
import Select from './Select';

const TodoCategoryBlock = styled.div`
  border-bottom: 3px solid #eeeeee;
  display: flex;

  .category-text {
    font-size: 18px;
    margin: 15px;
    margin-left: auto;
  }
`;

function TodoCategory() {
  return (
    <TodoCategoryBlock>
      <div className="category-text">
        카테고리별로 보기 :<Select></Select>
      </div>
    </TodoCategoryBlock>
  );
}

export default TodoCategory;
