import React, { ReactNode } from 'react';

import { Container } from './styles';

interface SkillsCardsProps {
  icon: ReactNode | string
}

const SkillsCards = ({ icon }: SkillsCardsProps) => {
  return(
    <Container>
      <div className="icon">{icon}</div>
    </Container>
  );
}

export default SkillsCards;