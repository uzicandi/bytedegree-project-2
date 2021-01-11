import React from 'react';
import styled from 'styled-components';
import { ExpensebookHead } from './ExpensebookHead';
import { ExpensebookFilter } from './ExpensebookFilter';
import { ExpenseItemList } from './ExpenseItemList';
import { CreateItemButton } from './CreateItemButton';
import { useDialogDispatch } from '../contexts/DialogContext';
import { CreateItemDialog } from './CreateItemDialog';
import { ModifyItemDialog } from './ModifyItemDialog';

const PageBody = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 40rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  overflow-y: scroll;
`;

export const ExpensebookPage = () => {
  const dialogDispatch = useDialogDispatch();
  const handleCreateButtonClick = () =>
    dialogDispatch({ type: 'OPEN_CREATE_DIALOG' });
  console.log(dialogDispatch);
  return (
    <>
      <PageBody>
        <ExpensebookHead />
        <ExpensebookFilter />
        <ExpenseItemList />
        <CreateItemButton onClick={handleCreateButtonClick} />
        <CreateItemDialog />
        <ModifyItemDialog />
      </PageBody>
    </>
  );
};

ExpensebookPage.defaultProps = {};

ExpensebookPage.displayName = 'ExpensebookPage';
