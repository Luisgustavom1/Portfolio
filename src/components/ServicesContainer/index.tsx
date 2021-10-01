import React, { useEffect } from 'react';
import ServicesCards from '../ServicesCards';

import code from '../../assets/svg/code.svg';
import figma from '../../assets/svg/figma.svg'
import mobile from '../../assets/svg/smartphone.svg';

import sr from '../../Services/scrollReveral';

import { Container, ServicesContainer } from './styles';
import { HeadingCategories } from '../../styles/commomStyles';

const Services: React.FC = () => {

  const config = {
    origin: 'top',
    distance: '50px',
    duration: 1500,
    easing: 'ease-in',
    reset: true,
  }
  useEffect(() => {    
    const animation = () => {
      const services = document.querySelectorAll('.service') as NodeListOf<HTMLElement>;
      
      services.forEach((service, index) => sr.reveal(service, {...config, delay: (50 * (index * 10))}));
    };
    animation();
  }, []);

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