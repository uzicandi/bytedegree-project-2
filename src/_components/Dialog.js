import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;

function Dialog({ title, children, onConfirm, onCancel, visible }) {
  if (!visible) return null;
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        {children}
        <ButtonGroup>
          <Buttons onClick={onCancel}>취소</Buttons>
          <Buttons onClick={onConfirm}>확인</Buttons>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

export default Dialog;
