import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  height: 56px;
  font-weight: 500;

  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  border: 0;

  transition: background-color 0.2s;

  &:hover {
    background: ${lighten(0.1, '#ff9000')};
  }
`;
