import styled from 'styled-components';

interface ContainerProps {
  showMenu: boolean
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  padding: 0 15rem;

  padding: 3.5rem 15rem;

  color: ${({ theme }) => theme.colors.primaryText};

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: -1px -4px 7px 0px black;

  .menuHamburguer {
    display: none;
    font-size: 3rem;
  }

  @media(max-width: 805px) {
    padding: 3.5rem 5rem;
  }

  @media(max-width: 480px) {
    .navContainer {
      position: absolute;
      z-index: 999;
      overflow: hidden;

      top: 10rem;
      right: 0;

      background-color: ${({ theme }) => theme.blue100};

      width: 60vw;
      height: ${({ showMenu }) => showMenu ? 'calc(100vh - 10rem)' : '0'};

      visibility: ${({ showMenu }) => showMenu ? 'visible' : 'hidden'};

      padding: 4rem 3rem;

      transition: height 500ms ease-out;
 
      ul {
        flex-direction: column;
        gap: 5rem;
        li {
          font-size: 2.2rem;
        }
      }
    }
    .menuHamburguer {
      display: block;
    }
  }
`;

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 2.6rem;

  user-select: none;
`;

export const Nav = styled.nav`
  position: relative;
  ul {
    display: flex;
    gap: 3.5vw;
    
    li {
        font-size: 1.8rem;
        cursor: pointer;
        user-select: none;
        &:hover {
            filter: brightness(.8);
        }
    }
  }
`;

