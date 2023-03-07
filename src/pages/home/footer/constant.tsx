import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 100vw;
    min-height: 40vh;
    margin:0px !important;
    padding:0px !important;
    /* background-color:red; */
    border:0px !important;
    background-color:black;

`;
                                                                                            // as
export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size:cover;
    /* clip-path: polygon(0 0, 100% 0, 100% 87%, 0% 100%); */
    display: flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction: column;
    padding:6em 0em;
`;
export const Logo = styled.div`
    width: 130px;
    background-position: center;
    background-size: contain;
    height: 50px;
    background-repeat:no-repeat;
    margin-bottom:30px;
`;

export const Icon = styled.div`
    width: 40px;
    height:40px;
    border-radius:5px;
    background-position: center;
    background-size: contain;
    background-repeat:no-repeat;
    cursor: pointer;
`;