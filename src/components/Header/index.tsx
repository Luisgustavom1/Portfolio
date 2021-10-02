import React, { useState } from 'react';

import { Container, Logo, Nav } from './styles';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);

  return(
    <Container showMenu={showMenu}>
        <div>
            <Logo>Portfolio</Logo>
        </div>
        <Nav className='navContainer'>
            <ul>
                <li>About Me</li>
                <li>Projects</li>
                <li>Services</li>
                <li>My Skills</li>
            </ul>
        </Nav>
        <p 
          className='menuHamburguer' 
          onClick={() => setShowMenu(!showMenu)}
          >MENU HAMBURGUER</p>
    </Container>
  );
}

export default Header;