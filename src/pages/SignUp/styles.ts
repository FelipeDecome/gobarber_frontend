import styled, { keyframes } from 'styled-components';
import { lighten, shade } from 'polished';

import signUpBackgroundImg from '../../assets/images/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  animation: ${appearFromLeft} 1s;

  form {
    width: 340px;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      font-size: 24px;
    }

    a {
      display: block;
      color: #f4ede8;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    text-decoration: none;
    color: #ff9000;

    display: flex;
    align-items: center;
    gap: 16px;

    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.1, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
