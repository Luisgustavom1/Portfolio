import React, { ReactNode } from 'react';

import { Container } from './styles';

interface SkillsCards {
  icon: ReactNode | string
}

const SkillsCards = ({ icon }: SkillsCards) => {
  return(
    <Container>
      {icon}
    </Container>
  );
}

export default SkillsCards;