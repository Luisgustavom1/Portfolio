import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 50vh;

  padding: 0 5%;
  
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  
  a {
    text-decoration: none;
    margin: 0 auto;
  }

  @media(max-width: 550px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;
