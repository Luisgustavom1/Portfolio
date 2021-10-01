import React from 'react';

import { Container, Logo, Nav } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
        <div>
            <Logo>Portfolio</Logo>
        </div>
        <Nav>
            <ul>
                <li>About Me</li>
                <li>Projects</li>
                <li>Services</li>
                <li>My Skills</li>
            </ul>
        </Nav>
    </Container>
  );
}

export default Header;