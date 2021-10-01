import React, { useEffect, useState } from 'react';
import { HeadingCategories } from '../../styles/commomStyles';
import ProjectsCards from '../ProjectsCards';

import sr from '../../Services/scrollReveral';

import { Container, ProjectsCardsContainer } from './styles';

const Projects: React.FC = () => {
  const config = {
    origin: 'right',
    distance: '300px',
    delay: 50,
    duration: 1500,
    easing: 'ease-in-out',
    reset: true,
  }
  useEffect(() => {
    function animation() {
      const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
            
      cards.forEach((card, index) => {
        index % 2 === 0 
          ? sr.reveal(card, config)
          : sr.reveal(card, {...config, delay: 150})
      })      
    }

    animation();
  }, []);

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