import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    height: 24.5rem;

    background-color: ${theme.gray50};

    border: 1px solid ${theme.gray100};
    border-bottom: 5px solid ${theme.green};

    margin: 0 auto;
    div {
      padding: 3rem;
    }

    h3 {
      font-size: 3.2rem;
      font-weight: 500;

      color: ${theme.gray300};

      margin-top: 4rem;
    }
  `}
`;
