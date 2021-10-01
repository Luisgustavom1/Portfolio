import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 10rem);
  margin-top: 5rem;
  
  display: grid;
  place-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      user-select: none;
    }
  }

  i {
    font-size: 3.8rem;
    color: ${({ theme }) => theme.blue};
    animation: 1s linear infinite alternate pulse;   
  }

  @keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.4); }
  }

  @media(max-width: 590px) {
   div {
    flex-direction: column;

    gap: 7rem;
   }
   i {
     margin-top: -8rem;
   }
  }
`;

export const IllustrationAside = styled.aside`
  transform: translateX(500px);
  opacity: .25;

  animation: slide 1s forwards;
  
  @keyframes slide {
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Heading = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.primaryText};

  width: 27rem;

  margin-bottom: 1.6rem;

  &:after {
    content: '|';
    margin-left: 3px;
    opacity: 1;
    animation: textSelect .7s infinite;
  }

  @keyframes textSelect {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.secondary};

  margin-bottom: 3.5rem;
`;

export const ButtonContainer = styled.span`
  transform: translateX(-500px);
  opacity: 0;

  animation: slide 1s forwards;

  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @keyframes slide {
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const ButtonCV = styled.a`
  background-color: ${({ theme }) => theme.blue};

  width: 143px;

  border-radius: 2px;

  padding: 13px 0;

  cursor: pointer;

  text-decoration: none;
  text-align: center;

  color: ${({ theme }) => theme.colors.background};
  font-weight: 700;
  font-size: 1.2rem;
  &:hover {
    filter: brightness(.9);
  }
`;

export const ButtonTransparent = styled.button`
  width: 143px;
  height: 42px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};

  border: 1px solid ${({ theme }) => theme.blue50};

  border-radius: 2px;

  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;