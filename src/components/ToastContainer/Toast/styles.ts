import styled, { css, keyframes } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;

    &::after {
      background: #3172b7;
    }
  `,
  success: css`
    background: #e6fff4;
    color: #2e656a;

    &::after {
      background: #2e656a;
    }
  `,
  error: css`
    background: #fddede;
    color: #c53030;

    &::after {
      background: #c53030;
    }
  `,
};

const toastCountdownBarAnimation = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 0;
  }
`;

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  display: flex;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;

    animation-name: ${toastCountdownBarAnimation};
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  & + & {
    margin-top: 8px;
  }

  > svg {
    margin: 2px 12px 0 0;
  }

  div {
    flex: 1;

    strong {
      font-weight: 500;
    }

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
