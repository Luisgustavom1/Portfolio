import { ReactNode } from 'react';

import { Container } from './styles';

interface SkillsCardsProps {
  icon: ReactNode | string;
  className: string
}

const SkillsCards = ({ icon, className }: SkillsCardsProps) => {
  return(
    <Container className={className}>
      <div className="icon">{icon}</div>
    </Container>
  );
}

export default SkillsCards;