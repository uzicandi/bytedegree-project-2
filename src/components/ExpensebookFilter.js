import React from 'react';
import styled from 'styled-components';

import { ocGray5, ocGray9 } from '../constants/style';

const FilterRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem 0;
  color: ${ocGray9};
  border-bottom: 1px solid ${ocGray5};

  label {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  select {
    margin-left: 0.5rem;
    height: 100%;
  }
`;
