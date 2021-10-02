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
        <i 
          className="fas fa-bars menuHamburguer"
          onClick={() => setShowMenu(!showMenu)}
          ></i>
    </Container>
  );
}

export default Header;