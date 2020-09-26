import React from 'react';
import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CategoryBlock = styled.div`
  width: 60px;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: #eeeeee;
`;

const Text = styled.div`
  width: 200px;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  width: 100px;
`;
const Remove = styled.div`
  margin: 0 5px 0 5px;
  font-size: 21px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Update = styled.div`
  margin: 0 5px 0 5px;
  font-size: 21px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

function TodoItem({ id, category, text, price }) {
  return (
    <TodoItemBlock>
      <CategoryBlock>{category}</CategoryBlock>
      <Text>{text}</Text>
      <Price>-{price}원</Price>
      <Update>
        <RiPencilFill />
      </Update>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
