import React from 'react';
import SkillsCards from '../SkillsCards';

import { Container, SkillContainer } from './styles';

const Skills: React.FC = () => {
  return(
    <Container>
      <SkillContainer>
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
      </SkillContainer>
    </Container>
  );
}

export default Skills;