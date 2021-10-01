import styled from 'styled-components';

export const Container = styled.section`
`;
// transform: translateX(-1000px);
// opacity: 0;
// animation: slide .2s forwards ease-in;
// @keyframes slide {
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }

export const ProjectsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  gap: 3.2rem;
`;
