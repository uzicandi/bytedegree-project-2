import React, { createContext, useReducer } from 'react';
import styled from 'styled-components';

// const TodoTemplateBlock = styled.div`
//   width: 512px;
//   height: 768px;
//   position: relative;
//   background: white;
//   border-radius: 16px;
//   box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

//   margin: 0 auto;

//   margin-top: 96px;
//   margin-bottom: 32px;
//   display: flex;
//   flex-direction: column;
// `;

const initialState = {
  expenses: [
    {
      id: 1,
      category: 'meal',
      title: '용개반점',
      amount: 7000,
    },
    {
      id: 2,
      category: 'grocery',
      title: '양배추',
      amount: 5000,
    },
    {
      id: 3,
      category: 'transportation',
      title: '택시비',
      amount: 20000,
    },
    {
      id: 4,
      category: 'housekeeping',
      title: '관리비',
      amount: 100000,
    },
    {
      id: 5,
      category: 'medical',
      title: '병원 진료',
      amount: 7000,
    },
  ],
  currentFilter: 'all',
  filteredExpenses: [],
};

const ExpenseStateContext = createContext(undefined);
const ExpenseDispatchContext = createContext(undefined);

export function DialogProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseStateContext.Provider value={state}>
      <ExpenseDispatchContext.Provider value={dispatch}>
        {children}
      </ExpenseDispatchContext.Provider>
    </ExpenseStateContext.Provider>
  );
}
