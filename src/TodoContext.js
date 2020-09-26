import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialExpenses = [
  {
    id: 1,
    text: '용개반점',
    category: '식사',
    price: 7000,
  },
  {
    id: 2,
    text: '양배추',
    category: '식료품',
    price: 5000,
  },
  {
    id: 3,
    text: '택시비',
    category: '교통',
    price: 2000,
  },
  {
    id: 4,
    text: '관리비',
    category: '생활',
    price: 100000,
  },
  {
    id: 5,
    text: '병원 진료',
    category: '의료',
    price: 7000,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled action type: ${action.type');
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialExpenses);
  const nextId = useRef(6);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
