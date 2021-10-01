import React from 'react';

import imagem from '../../assets/1.png';

import { Container } from './styles';

const ProjectsCards: React.FC = () => {
  return(
    <Container className='card'>
      <div className='content'>
        <img
          src={imagem}
          alt={`Imagem do `}
          loading='lazy'
        />
        <h1>Titulo do projeto</h1>
        <h4>Tecnologias ReactJs, Styled-Components e NodeJs</h4>
      </div>
    </Container>
  );
}

export default ProjectsCards;