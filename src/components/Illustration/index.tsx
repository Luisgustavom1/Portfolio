import React from 'react';

import illustration from '../../assets/svg/illustration.svg';

import { Container } from './styles';

const Illustration: React.FC = () => {
  return(
      <Container>
          <article>
              <h1>Olá, eu sou o Luis Gustavo :)</h1>
              <p>Desevnvolvedor Front-end / ReactJs - React Native - NextJs - NodeJs</p>
              <span>
                  <button>
                      Download CV
                  </button>
                  <button>
                      Entrar em contato
                  </button>
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