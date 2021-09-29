import styled from 'styled-components';

export const Container = styled.header`
    width: 100vw;
    padding: 0 15rem;

    padding: 3.5rem 15rem;

    color: ${({ theme }) => theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: -1px -4px 7px 0px black;
`;

export const Logo = styled.h1`
    font-weight: 700;
    font-size: 2.6rem;

    user-select: none;
`;

export const Nav = styled.nav`
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
