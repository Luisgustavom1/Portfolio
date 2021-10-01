import React, { useEffect } from 'react';
import ServicesCards from '../ServicesCards';

import code from '../../assets/svg/code.svg';
import figma from '../../assets/svg/figma.svg'
import mobile from '../../assets/svg/smartphone.svg';

import sr from '../../Services/scrollReveral';

import { Container, ServicesContainer } from './styles';
import { HeadingCategories } from '../../styles/commomStyles';

const Services: React.FC = () => {

  const services = document.querySelectorAll('.service');

  const config = {
    origin: 'top',
    distance: '200px',
    opacity: 1,
    delay: 50,
    duration: 1500,
    easing: 'ease-in',
    reset: true,
  }
  useEffect(() => {    
    sr.reveal(services, config)
  }, [services])

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