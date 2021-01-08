import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {/* <TodoItem id="1" text="용개반점" category="식사" price="7000"></TodoItem>
      <TodoItem id="2" text="양배추" category="식료품" price="5000"></TodoItem>
      <TodoItem id="3" text="택시비" category="교통" price="20000"></TodoItem>
      <TodoItem id="4" text="관리비" category="생활" price="100000"></TodoItem>
      <TodoItem id="5" text="병원 진료" category="의료" price="7000"></TodoItem> */}
      {todos.map(todo => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          category={todo.category}
          price={todo.price}
        ></TodoItem>
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
