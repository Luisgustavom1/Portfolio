import React, { useEffect } from 'react';

import illustration from '../../assets/svg/illustration.svg';

import { ButtonContainer, ButtonCV, ButtonTransparent, Container, Heading, Subtitle } from './styles';

const Illustration: React.FC = () => {

  function write(element: HTMLElement | null) {    
    if (element) {
      const arrayText = element.innerHTML?.split('');
      
      element.innerHTML = '';

      arrayText?.map(( letter, i ) => {
        setTimeout(() => {
          element.innerHTML += letter;
        }, 100 * i)
      })       
    }
  }

  useEffect(() => {
    write(document.querySelector('#title'));
  }, [])

  return(
    <Container>
      <div>
        <article>
          <Heading id='title'>Olá, eu sou o Luis Gustavo :)</Heading>
          <Subtitle id='subtitle'>Desevnvolvedor Front-end / ReactJs - React Native - NextJs - NodeJs</Subtitle>
          <ButtonContainer>
            <ButtonCV 
              href={`${process.env.PUBLIC_URL}/pdf/curriculo.pdf`}
              download  
            >
              Download CV
            </ButtonCV>
            <ButtonTransparent>
              Entrar em contato
            </ButtonTransparent>
          </ButtonContainer>
        </article>
        <aside>
          <img
            src={illustration}
            alt='Illustration svg'
          />
        </aside>
      </div>
      <a href='#aboutMe'>
        <i className="fas fa-chevron-down"></i>
      </a>
    </Container>
  );
}

export default Illustration;