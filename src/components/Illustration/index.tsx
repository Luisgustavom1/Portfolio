import React, { useEffect } from 'react';

import illustration from '../../assets/svg/illustration.svg';

import { ButtonContainer, ButtonCV, ButtonTransparent, Container, Heading, IllustrationAside, Subtitle } from './styles';

const Illustration: React.FC = () => {

  function write(element: HTMLElement | null) {    
    if (element) {
      const arrayText = element.innerHTML?.split('');
      
      element.innerHTML = '';

      // eslint-disable-next-line array-callback-return
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
          <Heading id='title'>Hello, I'm Luis Gustavo :)</Heading>
          <Subtitle id='subtitle'>Front-end Developer/ ReactJs - NextJs - NodeJs</Subtitle>
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
        <IllustrationAside>
          <img
            src={illustration}
            alt='Illustration svg'
          />
        </IllustrationAside>
      </div>
      <a href='#aboutMe'>
        <i className="fas fa-chevron-down"></i>
      </a>
    </Container>
  );
}

export default Illustration;