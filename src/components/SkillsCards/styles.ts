import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.gray50};

  &:first-child {
    font-size: 8rem;
    color: ${({ theme }) => theme.green};
  }
`;
