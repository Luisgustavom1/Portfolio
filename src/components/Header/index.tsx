import React, { useState } from 'react';

import { Container, Logo, Nav } from './styles';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return(
    <Container showMenu={showMenu}>
        <div>
            <Logo>Portfolio</Logo>
        </div>
        <Nav className='navContainer'>
            <ul>
                <a href="#aboutMe">
                  <li>About Me</li>
                </a>
                <a href="#projects">
                  <li>Projects</li>
                </a>
                <a href="#services">
                  <li>Services</li>
                </a>
                <a href="#mySkills">
                  <li>My Skills</li>
                </a>
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