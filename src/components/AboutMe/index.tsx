import React, { useEffect, useRef } from 'react';
import { HeadingCategories } from '../../styles/commomStyles';

import sr from '../../Services/scrollReveral';

import { Container } from './styles';

const AboutMe: React.FC = () => {  
  const config = {
    origin: 'top',
    distance: '70px',
    delay: 50,
    duration: 1500,
    easing: 'ease-in-out',
    reset: true,
  }
  useEffect(() => {    
    sr.reveal('.textAboutMe', config)
    sr.reveal('.headingAboutMe', {...config, delay: 200})
  }, [])
  return(
      <Container id='aboutMe'>
          <HeadingCategories className='headingAboutMe'>About Me</HeadingCategories>
          <p className='textAboutMe'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, asperiores laboriosam consectetur nisi, atque esse explicabo, odit molestiae alias ex eligendi vitae dolores rerum ratione ab voluptatum similique blanditiis animi!</p>
      </Container>
  );
}

export default AboutMe;