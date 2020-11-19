import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 18px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  console.log(todos);
  const expenses = todos.map(todo => todo.price);
  const totalExpenses = expenses.reduce((prev, cur, i) => {
    return prev + cur;
  }, 0);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <TodoHeadBlock>
      <h1>오늘의 지출</h1>
      <div className="day">{dateString}</div>
      <div className="tasks-left">총 지출 : -{totalExpenses}원</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
