import React from 'react';

import illustration from '../../assets/svg/illustration.svg';

import { ButtonCV, ButtonTransparent, Container, Heading, Subtitle } from './styles';

const Illustration: React.FC = () => {
  return(
      <Container>
          <article>
              <Heading>Olá, eu sou o Luis Gustavo :)</Heading>
              <Subtitle>Desevnvolvedor Front-end / ReactJs - React Native - NextJs - NodeJs</Subtitle>
              <span>
                  <ButtonCV>
                    Download CV
                  </ButtonCV>
                  <ButtonTransparent>
                    Entrar em contato
                  </ButtonTransparent>
              </span>
          </article>
          <aside>
              <img 
                src={illustration}
                alt='Illustration svg'
              />
          </aside>
      </Container>
  );
}

export default Illustration;