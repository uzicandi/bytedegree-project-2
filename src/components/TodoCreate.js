import React from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  z-index: 5;
  cursor: pointer;
  width: 70px;
  height: 70px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px 15px 0;
  margin-left: auto;
  font-size: 60px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
`;

function TodoCreate() {
  return (
    <>
      <CircleButton>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
