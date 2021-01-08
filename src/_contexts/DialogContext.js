import React, { useReducer, createContext, useContext } from 'react';

const DialogStateContext = createContext(undefined);
const DialogDispatchContext = createContext(undefined);

const initialState = {
  create: false,
  modify: false,
  delete: false,
  deleteTargetId: null,
  modifyTargetId: null,
};

function dialogReducer(state, action) {
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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function DialogProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialExpenses);
  return (
    <DialogStateContext.Provider value={state}>
      <DialogDispatchContext.Provider value={dispatch}>
        {children}
      </DialogDispatchContext.Provider>
    </DialogStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(DialogStateContext);
  if (!context) {
    throw new Error('DialogProvider is not found');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(DialogDispatchContext);
  if (!context) {
    throw new Error('DialogProvider is not found');
  }
  return context;
}
