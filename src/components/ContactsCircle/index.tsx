import { ReactNode } from 'react';

import { Container } from './styles';

interface ContactsCircleProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  link: string;
}

const ContactsCircle = ({ icon, title, subtitle, link }: ContactsCircleProps) => {
  return(
    <Container href={link} target='_blank' className='contact'>
      <div>
        { icon }
      </div>
      <h1>
        {title}
      </h1>
      <p>
        {subtitle}
      </p>
    </Container>
  );
}

export default ContactsCircle;