import React from 'react';
import styled from 'styled-components';
import { ocGray9 } from '../constants/style';

const Form = styled.form`
  margin: 0;
  padding: 1rem;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  color: ${ocGray9};
  label {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  input {
    height: 1.5rem;
  }
  select {
    height: 2rem;
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const ItemForm = () => {
  return (
    <Form>
      <InputField>
        <label htmlFor="title">내용</label>
        <input name="title" type="text" />
      </InputField>
      <InputField>
        <label htmlFor="title">금액</label>
        {/* Note : number타입을 쓰지 않고 숫자만 입력 받을 수 있게 */}
        <input name="title" type="number" min={0} />
      </InputField>
    </Form>
  );
};
