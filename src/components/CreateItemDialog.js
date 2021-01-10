import React from 'react';
import { Dialog } from './Dialog';
import { useDialogState, useDialogDispatch } from '../contexts/DialogContext';
import { ItemForm } from './ItemForm';

export const CreateItemDialog = () => {
  const { create: isVisible } = useDialogState(); // 현재 create 상태를 변수명으로 지정
  console.log('useDialogState()', useDialogState());
  const dialogDispatch = useDialogDispatch();
  const handleDialogCancel = () => {
    dialogDispatch({ type: 'CLOSE_DIALOG' });
  };
  return (
    <Dialog
      title="지출 등록"
      confirmText="등록"
      visible={isVisible}
      onCancel={handleDialogCancel}
    >
      <ItemForm></ItemForm>
    </Dialog>
  );
};

CreateItemDialog.defaultProps = {
  visible: false,
};

CreateItemDialog.displayName = 'CreateItemDialog';
