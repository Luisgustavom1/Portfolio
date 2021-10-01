import styled from 'styled-components';

export const Container = styled.article`
  text-align: center;

  height: 50vh;

  padding-top: 5%;
  p {
    max-width: 74.5rem;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.secondary};

    margin: 0 auto;
  }
`;
