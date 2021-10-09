import React, { useState, useEffect, Component } from 'react'


import { Wrapper,Container,H1,P,Btn } from './constant'
const Hero = () =>{

 const bg ="https://previews.123rf.com/images/rawpixel/rawpixel1606/rawpixel160636720/58613117-business-people-meeting-discussion-corporate-handshake-concept.jpg"
    return(
        <>
            <Wrapper >
                <Container style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg})`}}>
                    <H1 style={{textAlign:"center"}}>
                        Welcome to Company Name
                    </H1>
                    <P>
                        Take One Step ahead to your competitors Take One Step ahead to your
                    </P>
                    <Btn>
                        Learn More
                    </Btn>
                </Container>
               
            </Wrapper>
        </>
    );
}

export default Hero;