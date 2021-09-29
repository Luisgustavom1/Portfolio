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
                <li>Sobre mim</li>
                <li>Projetos</li>
                <li>Serviços</li>
                <li>Minhas skills</li>
            </ul>
        </Nav>
    </Container>
  );
}

export default Header;