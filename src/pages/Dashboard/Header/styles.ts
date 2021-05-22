import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px;

  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    padding: 0.6rem;
    background: transparent;
    border: 1px solid #3e3b47;
    font-size: 0;
    border-radius: 0.6rem;

    transition: filter 0.2s;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }

    &:hover {
      filter: brightness(1.5);
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    > a {
      text-decoration: none;

      &:hover strong {
        opacity: 0.9;
      }

      strong {
        color: #ff9000;
        transition: opacity 0.2s;
      }
    }
  }
`;
