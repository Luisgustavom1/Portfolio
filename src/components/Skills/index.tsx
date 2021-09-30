import React from 'react';
import { HeadingCategories } from '../../styles/commomStyles';
import SkillsCards from '../SkillsCards';

import { Container, SkillContainer } from './styles';

const Skills: React.FC = () => {
  return(
    <Container>
      <HeadingCategories>
        Skills
      </HeadingCategories>
      <SkillContainer>
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
        <SkillsCards 
          icon={<i className="fab fa-html5"></i>}
        />
      </SkillContainer>
    </Container>
  );
}

export default Skills;