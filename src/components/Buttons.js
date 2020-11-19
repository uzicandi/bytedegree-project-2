import React, { Children } from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const pink = css`
  background-color: #eeeeee;
`;

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const colorStyles = css`
  ${({ color }) => css`
    background-color: #f06595;
  `}
`;

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  & + &{
      margin-left: 0.5rem;
  }
  align-items: center;

  /* 크기 */
  ${sizeStyles} 
  
  /* 색상 */
  ${colorStyles}
`;

function Buttons({ color, size, children, ...rest }) {
  return (
    <>
      <StyledButton color={color} size={size} {...rest}>
        {children}
      </StyledButton>
    </>
  );
}

Buttons.defaultProps = {
  color: '#f06595',
  size: 'small',
};

export default Buttons;
