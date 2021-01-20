import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0 18px;

  background: #232129;
  border-radius: 10px;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  transition: all 0.2s;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.hasError &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9900;
      border-color: #ff9900;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9900;
    `}

  input {
    padding: 18px 0;

    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 18px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 18px;

  span {
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
