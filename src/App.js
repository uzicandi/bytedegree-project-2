import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCategory from './components/TodoCategory';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
import Dialog from './components/Dialog';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoCategory />
          <TodoList />
          <TodoCreate />
          {/* <Dialog>데이터생성</Dialog> */}
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
