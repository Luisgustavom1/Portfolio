import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.blue100};

    border: 1px solid ${theme.blue50};
  
    width: 15rem;
    height: 15rem;
    
    display: grid;
    place-items: center;

    margin: 0 auto;
    .icon {
      font-size: 8rem;
      color: ${theme.blue};
    }
  `}
`;
