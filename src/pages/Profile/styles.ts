import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  form {
    width: 340px;

    display: flex;
    flex-direction: column;

    gap: 24px;

    h1 {
      font-size: 20px;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 144px;
  background: #28262e;

  div {
    max-width: 1120px;
    margin: 0 auto;
    height: 100%;
    padding: 32px;

    display: flex;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;

      &:hover svg {
        color: ${lighten(0.2, '#999591')};
      }

      svg {
        width: 24px;
        height: 24px;
        color: #999591;
        transition: color 0.2s;
      }
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  margin-bottom: 8px;
  margin-top: -25%;
  position: relative;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    object-fit: cover;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    background: #ff9000;
    transition: background-color 0.2s;
    cursor: pointer;

    input {
      display: none;
    }

    &:hover {
      background: ${lighten(0.1, '#ff9900')};
    }

    svg {
      color: #312e38;
      width: 20px;
      height: 20px;
    }
  }
`;
