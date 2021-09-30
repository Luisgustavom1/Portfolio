import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    width: 100px;
    
    display: grid;
    place-items: center;

    cursor: pointer;

    div {
      width: 6.2rem;
      height: 6.2rem;

      border-radius: 50%;

      font-size: 2.7rem;

      color: ${theme.green};
      background-color: ${theme.gray50};

      display: grid;
      place-items: center;

      user-select: none;

    }

    h1 {
      color: ${theme.colors.primary};

      font-size: 1.8rem;
      font-weight: 700;

      margin: 1.9rem 0 .5rem 0;
    }

    p {
      font-size: 1.6rem;
      color: ${theme.gray300};
    }

    &:hover {
      transform: scale(1.03);
    }
  `}
`;

