import React from 'react';
import ServicesCards from '../ServicesCards';

import code from '../../assets/svg/code.svg';
import figma from '../../assets/svg/figma.svg'
import mobile from '../../assets/svg/smartphone.svg';

import { Container, ServicesContainer } from './styles';
import { HeadingCategories } from '../../styles/commomStyles';

const Services: React.FC = () => {
  return(
    <Container>
      <HeadingCategories>
        Services
      </HeadingCategories>
      <ServicesContainer>
        <ServicesCards 
          img={code}
          title='Criação de apps e sites'
        />
        <ServicesCards 
          img={figma}
          title='Ui Designer'
        />
        <ServicesCards 
          img={mobile}
          title='Criação de apps e sites'
        />
      </ServicesContainer>
    </Container>
  );
}

export default Services;