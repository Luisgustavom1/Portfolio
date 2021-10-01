import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    width: 100px;
    height: 11.4rem;
    
    display: grid;
    place-items: center;

    cursor: pointer;

    div {
      width: 6.2rem;
      height: 6.2rem;

      border-radius: 50%;

      font-size: 2.7rem;

      color: ${theme.blue};
      background-color: ${theme.blue100};

      display: grid;
      place-items: center;

      user-select: none;

    }

    h1 {
      color: ${theme.colors.primaryText};

      font-size: 1.8rem;
      font-weight: 700;

      margin: 1.9rem 0 .5rem 0;
    }

    p {
      font-size: 1.6rem;
      color: ${theme.colors.secondary};
    }

    &:hover {
      transform: scale(1.03);
    }
  `}
`;

