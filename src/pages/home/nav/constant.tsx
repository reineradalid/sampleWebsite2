import styled from 'styled-components'

export const Wrapper = styled.div`
    position:fixed;
    top: 0;
    width: 100%;
    z-index: 20;
    align-items:center;
    display:flex;
    transition: all 0.5s;
    flex-direction: row;
    justify-content:center;

`;

export const Container = styled.div`
    width: 90%;
    align-items:center;
    display:flex;
    transition: all 0.3s;
    flex-direction: row;
    justify-content:space-between;
`;

export const Logo = styled.div`
    width: 130px;
    background-position: center;
    background-size: contain;
    height: 50px;
    background-repeat:no-repeat;
`;
