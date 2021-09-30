import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 35rem;

    background-color: ${theme.gray50};

    display: grid;
    place-items: center;

    padding: 2rem 2.5rem;

    border-radius: 2px;
    border: 1px solid ${theme.gray100};
    
    margin: 0 auto;
    img {
      width: 30rem;
    }

    h1 {
      color: ${theme.colors.primary};

      font-size: 1.8rem;
      font-weight: 500;

      margin: 2.3rem 0 .6rem 0;
    }

    h4 {
      font-size: 1.4rem;
      color: ${theme.gray300};
    }
  `}
`;
