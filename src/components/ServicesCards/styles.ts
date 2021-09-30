import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    height: 24.5rem;

    background-color: ${theme.gray50};

    border: 1px solid ${theme.gray100};

    margin: 0 auto;

    position: relative;
    .content {
      padding: 3rem;
    }

    h3 {
      font-size: 3.2rem;
      font-weight: 500;

      color: ${theme.gray300};

      margin-top: 4rem;
    }

    .faixa {
      display: block;
      
      width: 100%;
      height: 5px;

      background-color: ${theme.green};

      position: absolute;
      bottom: 0;
    }
  `}
`;
