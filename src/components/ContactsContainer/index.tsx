import React, { useEffect } from 'react';

import sr from '../../Services/scrollReveral';

import ContactsCircle from '../ContactsCircle';

import { Container } from './styles';

const Contacts: React.FC = () => {
  useEffect(() => {    
    const config = {
      origin: 'top',
      distance: '1px',
      delay: 150,
      duration: 1500,
      easing: 'ease-in',
      reset: true,
    };

    sr.reveal('.contact', config)
  }, []);

  return(
    <Container>
      <ContactsCircle 
        icon={<i className="far fa-smile"></i>}
        title='My Name'
        subtitle='Luis Gustavo'
        link={'/'}
      />
      <ContactsCircle 
        icon={<i className="fab fa-linkedin-in"></i>}
        title='Linkedin'
        subtitle='@luisgustavom1'
        link={'https://www.linkedin.com/in/luisgustavom1/'}
      />
      <ContactsCircle 
        icon={<i className="fab fa-instagram"></i>}
        title='Instagram'
        subtitle='@luisgustavom1'
        link={'https://www.instagram.com/luisgustavom1/'}
      />
      <ContactsCircle 
        icon={<i className="fab fa-github"></i>}
        title='Github'
        subtitle='@luisgustavom1'
        link={'https://www.github.com/luisgustavom1/'}
      />
    </Container>
  );
}

export default Contacts;