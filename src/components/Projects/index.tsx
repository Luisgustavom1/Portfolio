import React from 'react';
import { HeadingCategories } from '../../styles/commomStyles';
import ProjectsCards from '../ProjectsCards';

import { Container, ProjectsCardsContainer } from './styles';

const Projects: React.FC = () => {
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