import React, { useMemo, useEffect } from 'react';
import { Dialog } from './Dialog';
import { ItemForm } from './ItemForm';
import { useDialogState, useDialogDispatch } from '../contexts/DialogContext';
import {
  useExpenseState,
  useExpenseDispatch,
} from '../contexts/ExpenseContext';
import { useInput } from '../hooks/useInput';

export const ModifyItemDialog = () => {
  const { expenses } = useExpenseState();
  const expenseDispatch = useExpenseDispatch();
  const dialogDispatch = useDialogDispatch();
  const { modify: isVisible, modifyTargetId } = useDialogState();
  const targetItem = useMemo(
    () => expenses.find(expense => expense.id === modifyTargetId),
    [expenses, modifyTargetId]
  );
  const { form, onChangeField, setForm } = useInput(targetItem);
  const handleModifyConfirm = () => {
    expenseDispatch({ type: 'MODIFY_ITEM', ...form });
    handleModifyCancel();
  };

  useEffect(() => {
    if (targetItem) {
      setForm(targetItem); // 이걸 해야 modify 할 때 수정 내용이 나옴!
    }
  }, [targetItem]);

  const handleModifyCancel = () => dialogDispatch({ type: 'CLOSE_DIALOG' });
  return (
    <Dialog
      visible={isVisible}
      title="지출 수정"
      confirmText="수정"
      onCancel={handleModifyCancel}
      onConfirm={handleModifyConfirm}
    >
      <ItemForm onChangeField={onChangeField} formValues={form} />
    </Dialog>
  );
};

ModifyItemDialog.defaultProps = {};

ModifyItemDialog.displayName = 'ModifyItemDialog';
