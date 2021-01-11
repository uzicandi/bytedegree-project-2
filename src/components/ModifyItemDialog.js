import React from 'react';
import { Dialog } from './Dialog';
import { ItemForm } from './ItemForm';
import { useDialogState, useDialogDispatch } from '../contexts/DialogContext';
import {
  useExpenseState,
  useExpenseDispatch,
} from '../contexts/ExpenseContext';

export const ModifyItemDialog = () => {
  const { expenses } = useExpenseState();
  const expenseDispatch = useExpenseDispatch();
  const dialogDispatch = useDialogDispatch();
  const { modify: isVisible, modifyTargetId } = useDialogState();
  const handleModifyCancel = () => dialogDispatch({ type: 'CLOSE_DIALOG' });
  return (
    <Dialog
      visible={isVisible}
      title="지출 수정"
      confirmText="수정"
      onCancel={handleModifyCancel}
    >
      <ItemForm />
    </Dialog>
  );
};

ModifyItemDialog.defaultProps = {};

ModifyItemDialog.displayName = 'ModifyItemDialog';
