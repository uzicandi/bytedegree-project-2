import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId, useTodoState } from '../TodoContext';
import Dialog from './Dialog';

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

const InsertForm = styled.form`
  margin-top: 1rem;
`;

const InputDiv = styled.div`
  display: flex;
  p {
    font-size: 15px;
  }
`;

const Input = styled.input`
  margin: 10px 0 10px 10px;
`;

const SelectBlock = styled.select`
  width: 50px;
  margin: 10px 0 10px 10px;
`;
const Options = styled.option``;

function TodoCreate() {
  const todos = useTodoState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [category, setCategory] = useState(todos[0].category);
  const [price, setPrice] = useState('');
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setOpen(!open);
    setDialog(true);
  };

  const onCancel = () => {
    setOpen(!open);
    setDialog(false);
  };

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChangeCategory = e => {
    setCategory(e.target.value);
  };
  const onChangeText = e => {
    setText(e.target.value);
  };
  const onChangePrice = e => {
    setPrice(Number(e.target.value));
  };

  const onConfirm = e => {
    e.preventDefault(); // 새로고침 방지
    setOpen(!open);
    setDialog(false);
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
    setCategory(todos[0].category);
    setPrice('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <Dialog
          title="지출 내역 추가하기"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          <InsertFormPositioner>
            <InsertForm>
              <InputDiv>
                <p>카테고리 : </p>
                <SelectBlock onChange={onChangeCategory}>
                  {todos.map(todo => (
                    <Options value={todo.category}>{todo.category}</Options>
                  ))}
                </SelectBlock>
              </InputDiv>
              <InputDiv>
                <p>내역 : </p>
                <Input text={text} onChange={onChangeText}></Input>
              </InputDiv>
              <InputDiv>
                <p>가격 : </p>
                <Input price={price} onChange={onChangePrice}></Input>
              </InputDiv>
            </InsertForm>
          </InsertFormPositioner>
        </Dialog>
      )}
      <CircleButton onClick={onClick} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
