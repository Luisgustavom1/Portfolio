import React from 'react';
import { HeadingCategories } from '../../styles/commomStyles';

import { Container } from './styles';

const AboutMe: React.FC = () => {
  return(
      <Container id='aboutMe'>
          <HeadingCategories>About Me</HeadingCategories>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, asperiores laboriosam consectetur nisi, atque esse explicabo, odit molestiae alias ex eligendi vitae dolores rerum ratione ab voluptatum similique blanditiis animi!</p>
      </Container>
  );
}

export default AboutMe;