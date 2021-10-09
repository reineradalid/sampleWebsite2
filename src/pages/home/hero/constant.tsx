import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 100vw;
    height: 100vh;
    margin:0px !important;
    padding:0px !important;
    /* background-color:red; */
    border:0px !important;
    background-color: #3f3f3f;

`;
                                                                                            // as
export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size:cover;
    clip-path: polygon(0 0, 100% 0, 100% 87%, 0% 100%);
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`;

export const H1  = styled.h1`
    color: white;
    font-size: 50px;
    margin:5px;
`;

export const P = styled.p`
    color: white;
    font-size: 25px;
    margin:5px;
    max-width: 500px;
    text-align: center;


    @media only screen and (max-width:320px){
        max-width: 300px;
    }

`;

export const Btn = styled.button`
    border:0px !important;
    margin:20px;
    padding:15px;
    color:white;
    background-color:#ff6622;
    border-radius: 50px;
    width:250px;
    font-size:15px;
    font-weight: 700;
    cursor: pointer;
`;