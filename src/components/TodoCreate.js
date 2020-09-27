import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';
import Dialog from './Dialog';
import Select from './Select';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
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

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div``;

const InsertForm = styled.form``;

const Input = styled.input``;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => {
    setText(e.target.value);
    setCategory(e.target.value);
    setPrice(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: text,
        category: category,
        price: price,
      },
    });
    setText('');
    setCategory('');
    setPrice('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        // <InsertFormPositioner>
        //   <InsertForm onSubmit={onSubmit}>
        //     <Input
        //       autoFocus
        //       onChange={onChange}
        //       text={text}
        //       category={category}
        //       price={price}
        //     ></Input>
        //   </InsertForm>
        // </InsertFormPositioner>
        <Dialog title="지출 내역 추가하기">
          <InsertFormPositioner>
            <InsertForm>
              {/* <Select category={category}></Select> */}
              <Select></Select>
              <Input text={text}></Input>
              <Input price={price}></Input>
            </InsertForm>
          </InsertFormPositioner>
        </Dialog>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
