import { ReactNode } from 'react';

import { Container } from './styles';

interface SkillsCardsProps {
  icon: ReactNode | string;
}

const SkillsCards = ({ icon }: SkillsCardsProps) => {
  return(
    <Container className='skill'>
      <div className="icon">{icon}</div>
    </Container>
  );
}

export default SkillsCards;