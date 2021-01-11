import React from 'react';
import { Dialog } from './Dialog';
import { useDialogState, useDialogDispatch } from '../contexts/DialogContext';
import { useExpenseDispatch } from '../contexts/ExpenseContext';

export const DeleteItemDialog = () => {
  const { delete: isVisible, deleteTargetId } = useDialogState();
  const dialogDispatch = useDialogDispatch();
  const expenseDispatch = useExpenseDispatch();
  const handleDeleteConfirm = () => {
    expenseDispatch({ type: 'DELETE_ITEM', id: deleteTargetId });
    dialogDispatch({ type: 'CLOSE_DIALOG' });
  };
  const handleDeleteCancel = () => {
    dialogDispatch({ type: 'CLOSE_DIALOG' });
  };

  return (
    <Dialog
      visible={isVisible}
      title="정말 삭제하시겠습니까?"
      confirmType="danger"
      confirmText="삭제"
      onConfirm={handleDeleteConfirm}
      onCancel={handleDeleteCancel}
    ></Dialog>
  );
};
