import styled from 'styled-components';

export const Container = styled.article`
  text-align: center;
  margin-top: 16.9rem;

  p {
    max-width: 74.5rem;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.gray300};

    margin: 0 auto 8.5rem auto;
  }
`;
