import React, { useEffect } from 'react';
import { HeadingCategories } from '../../styles/commomStyles';
import ProjectsCards from '../ProjectsCards';

import sr from '../../Services/scrollReveral';

import { Container, ProjectsCardsContainer } from './styles';

const Projects: React.FC = () => {
  const allCards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

  useEffect(() => {    
    const config = {
      origin: 'left',
      distance: '1px',
      delay: 50,
      duration: 1500,
      easing: 'ease-in-out',
      reset: true,
    }
    sr.reveal('.card', config);
  }, [])
  return(
    <Container>
      <HeadingCategories>Projects</HeadingCategories>
      <ProjectsCardsContainer>
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
      </ProjectsCardsContainer>
    </Container>
  );
}

export default Projects;