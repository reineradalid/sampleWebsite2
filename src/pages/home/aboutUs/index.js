import React, { useState, useEffect, Component } from 'react'


import { 
    Wrapper,
    Container,
    H1,
    P,
    ContentContainer,
    Img,
    ImgOutline,
    TextContainer,
    Btn
} from './constant'
import {
    UserOutlined
  } from '@ant-design/icons';

const About = () =>{

 const img ="https://previews.123rf.com/images/rawpixel/rawpixel1606/rawpixel160636720/58613117-business-people-meeting-discussion-corporate-handshake-concept.jpg"
    return(
        <>
            <Wrapper >
                <Container >
                    <H1>
                       <span style={{color:"#ff6622"}}>ABOUT</span> US
                    </H1>
                    <P>
                       WHOE WE ARE
                    </P>
                    <div style={{display:"flex", flexDirection:"row",alignItems: "center"}}>
                        <div style={{height:"2px", width:"100px", backgroundColor:"white"}}/>
                        <UserOutlined style={{color:"#fff", fontSize:"25px", margin:"0px 5px"}}/>
                        <div style={{height:"2px", width:"100px", backgroundColor:"white"}}/>
                    </div>

                    <ContentContainer >
                        <ImgOutline >
                            <Img style={{backgroundImage:`url(${img})`}}/>
                        </ImgOutline>
                        <TextContainer style={{maxWidth:"500px"}}>
                            <h2>
                                WE ARE COMPANY NAME
                            </h2>
                            <p style={{marginBottom:"50px"}} >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a 
                                type specimen book.
                            </p>
                            <Btn>
                                Learn More
                            </Btn>
                        </TextContainer>
                    </ContentContainer>
                    
                </Container>
               
            </Wrapper>
        </>
    );
}
export default About;