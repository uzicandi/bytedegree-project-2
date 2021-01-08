import React, { useReducer, createContext, useContext } from 'react';

const TodoStateContext = createContext(undefined);
const TodoDispatchContext = createContext(undefined);

const initialState = {
  create: false,
  modify: false,
  delete: false,
  deleteTargetId: null,
  modifyTargetId: null,
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'OPEN_CREATE_DIALOG':
      return {
        ...initialState,
        create: true,
      };
    case 'OPEN_MODIFY_DIALOG':
      return {
        ...initialState,
        modify: true,
        modifyTargetId: action.id,
      };
    case 'OPEN_DELETE_DIALOG':
      return {
        ...initialState,
        delete: true,
        deleteTargetId: action.id,
      };
    case 'CLOSE_DIALOG':
      return initialState;
    // case 'CREATE':
    //   return state.concat(action.todo);
    // case 'TOGGLE':
    //   return state.map(todo =>
    //     todo.id === action.id
    //       ? {
    //           ...todo,
    //           done: !todo.done,
    //         }
    //       : todo
    //   );
    // case 'REMOVE':
    //   return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled action type: ${action.type');
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialExpenses);
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
