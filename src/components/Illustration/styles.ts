import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    
    padding: 0 15rem;
    margin-top: 14rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Heading = styled.h1`
    font-size: 3.6rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.primary};

    width: 27rem;

    margin-bottom: 1.6rem;
`;

export const Subtitle = styled.p`
    font-size: 1.5rem;
    font-weight: 500;

    color: ${({ theme }) => theme.gray300};

    margin-bottom: 3.5rem;
`;

export const ButtonCV = styled.button`
    background-color: ${({ theme }) => theme.green};

    width: 14.3rem;
    height: 4.2rem;

    border-radius: 2px;

    margin-right: 1.5rem;

    &:hover {
        filter: brightness(.9);
    }
`;

export const ButtonTransparent = styled.button`
    width: 15rem;
    height: 4rem;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};

    border: 1px solid ${({ theme }) => theme.gray100};

    border-radius: 2px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.gray300};
    }
`;