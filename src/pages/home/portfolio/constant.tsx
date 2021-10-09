import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 100vw;
    min-height: 100vh;
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
    /* clip-path: polygon(0 0, 100% 0, 100% 87%, 0% 100%); */
    display: flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction: column;
    padding:6em 0em;
`;

export const H1  = styled.h1`
    color: white;
    font-size: 50px;
    margin:5px;

    @media only screen and (max-width:400px){
        font-size: 40px;
    }

    @media only screen and (max-width:325px){
        font-size: 35px;
    }
`;

export const P = styled.p`
    color: white;
    font-size: 25px;
    margin:5px;
    max-width: 500px;
    text-align: center;

    

    @media only screen and (max-width:400px){
        font-size: 20px;
    }

    @media only screen and (max-width:325px){
        font-size: 18px;
        max-width: 300px;
    }

`;

export const Btn = styled.button`
    border:0px !important;
    padding:15px;
    color:white;
    background-color:#ff6622;
    border-radius: 50px;
    width:250px;
    font-size:15px;
    font-weight: 700;
    cursor: pointer;
`;

export const ContentContainer = styled.div`
    width:90%; 
    display:flex; 
    flex-direction:row; 
    justify-content:space-evenly; 
    margin-top:50px;

    @media only screen and (max-width:540px){
        flex-direction:column; 
        align-items:center;
    }
`;

export const Img = styled.div`
    margin-top:20px; 
    margin-left:20px ;
    width:500px; 
    height:400px; 
    border-radius:12px;
    background-size:cover;
    background-repeat: no-repeat;

    @media only screen and (max-width:900px){
        width:360px !important; 
        height:280px; 
    }
    @media only screen and (max-width:800px){
        width:320px !important; 
        height:240px; 
    }

    @media only screen and (max-width:380px){
        width:300px !important; 
        height:200px;    
    }
    @media only screen and (max-width:320px){
        width:280px !important; 
        height:160px;    
    }
`;

export const ImgOutline = styled.div`
    width:500px;
    height:400px;
    border:3px solid #ff6622; 
    border-radius:12px;

    @media only screen and (max-width:900px){
        width:360px !important; 
        height:280px; 
    }

    @media only screen and (max-width:800px){
        width:320px !important; 
        height:240px; 
    }

    @media only screen and (max-width:380px){
        width:300px !important; 
        height:200px;    
        margin-left: -20px;
    }

    @media only screen and (max-width:320px){
        width:280px !important; 
        height:160px;    
    }
`;

export const TextContainer = styled.div`
    color:#fff;
    

    @media only screen and (max-width:900px){
        margin-top:50px;
        max-width:360px;
        margin-left:50px;
    }

    @media only screen and (max-width:500px){
        margin-left: 0px;
       
    }

    
`;

