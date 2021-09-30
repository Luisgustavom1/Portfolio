import styled from 'styled-components';

export const Container = styled.article`
  text-align: center;
  margin-top: 16.9rem;

  h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 3.2rem;
      font-weight: 700;
  }

  p {
      max-width: 74.5rem;

      font-size: 1.8rem;
      color: ${({ theme }) => theme.gray300};

      margin: 3rem auto 8.5rem auto;
  }
`;
