import React, { useEffect } from 'react';
import { HeadingCategories } from '../../styles/commomStyles';
import ProjectsCards from '../ProjectsCards';

import sr from '../../Services/scrollReveral';

import clocker from '../../assets/projectImg/clocker.png';
import remoteWork from '../../assets/projectImg/remoteWork.jpg';
import toDoApp from '../../assets/projectImg/toDoApp.png';
import ignews from '../../assets/projectImg/ignews.jpg';
import restCountries from '../../assets/projectImg/restCountries.png';
import alurakut from '../../assets/projectImg/alurakut.png';

import { Container, ProjectsCardsContainer } from './styles';

const Projects: React.FC = () => {
  useEffect(() => {
    const config = {
      origin: 'right',
      distance: '300px',
      delay: 50,
      duration: 1500,
      easing: 'ease-in-out',
      reset: true,
    }
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
    <Container id='projects'>
      <HeadingCategories>Projects</HeadingCategories>
      <ProjectsCardsContainer>
        <ProjectsCards 
          image={remoteWork}
          title={'Remote Work'}
          tecnologies={'Tecnologias: ReactJs - Styled-Components - MongoDb - NodeJs - JWT'}
          href={'https://github.com/Luisgustavom1/RemoteWorking'}
        />
        <ProjectsCards 
          image={clocker}
          title={'Clocker'}
          tecnologies={'Tecnologias: ReactJs - Typescript - Firebase - Styled-Components'}
          href={'https://github.com/Luisgustavom1/Clone-Clocker'}
        />
        <ProjectsCards 
          image={toDoApp}
          title={'To do App'}
          tecnologies={'Tecnologias: ReactJs - Styled-Components - Local Storage - DatoCMS'}
          href={'https://github.com/Luisgustavom1/To-Do-App'}
        />
        <ProjectsCards 
          image={ignews}
          title={'Ignews'}
          tecnologies={'Tecnologias: NextJs - Typescript - Stripe - FaunaDb - Prismic - NextAuth'}
          href={'https://github.com/Luisgustavom1/Ignews'}
        />
        <ProjectsCards 
          image={restCountries}
          title={'Rest Countries'}
          tecnologies={'Tecnologias: ReactJs - ContextApi - Styled Components - RestApi'}
          href={'https://github.com/Luisgustavom1/Countries-Tracker'}
        />
        <ProjectsCards 
          image={alurakut}
          title={'Clone Orkut'}
          tecnologies={'Tecnologias: NextJs - DatoCms - Styled Components'}
          href={'https://github.com/Luisgustavom1/Alurakut'}
        />
      </ProjectsCardsContainer>
    </Container>
  );
}

export default Projects;