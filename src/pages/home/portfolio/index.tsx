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
    PictureOutlined
  } from '@ant-design/icons';
  import { Divider } from 'antd';


const Portfolio = () =>{

    const sample =[1,2,3]
    const bg ="https://weblium.com/blog/wp-content/uploads/2019/01/image1-1000x534.png"
    const img ="https://previews.123rf.com/images/rawpixel/rawpixel1606/rawpixel160636720/58613117-business-people-meeting-discussion-corporate-handshake-concept.jpg"
    return(
        <>
            <Wrapper >
                <Container >
                    <H1>
                       <span style={{color:"#ff6622"}}>OUR</span> PORTFOLIO
                    </H1>
                    <P>
                       OUR LATEST PROJECT
                    </P>
                    <div style={{display:"flex", flexDirection:"row",alignItems: "center"}}>
                        <div style={{height:"2px", width:"100px", backgroundColor:"white"}}/>
                        <PictureOutlined style={{color:"#fff", fontSize:"25px", margin:"0px 5px"}}/>
                        <div style={{height:"2px", width:"100px", backgroundColor:"white"}}/>
                    </div>

                    <ContentContainer >

                        {
                            sample.map((item)=>
                            
                          
                            <div>
                                <div
                                    style={{
                                        borderRadius:"12px",
                                        backgroundColor:"black",
                                        height:"280px",
                                        width:"380px",
                                        transition: "1s",
                                        overflow: "hidden",
                                        backgroundImage:`url(${bg})`,
                                        backgroundSize:"cover",
                                        backgroundPosition:"center"
                                    }}
                                />
                                

                                <h3 style={{color:"#fff", marginBottom:0}}>
                                    TITLE
                                </h3>
                                <p style={{maxWidth:"380px", color:"#fff"}}>
                                    lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos veritatis tenetur voluptates voluptatum praesentium eum quia porro natus laboriosam sed, aut assumenda dolores quibusdam repellendus harum, aliquam iste molestias molestiae?  
                                </p>
                            </div>
                          )   
                        }
                    </ContentContainer>
                    <Btn style={{marginTop:50}}>
                        Learn More
                    </Btn>
                </Container>
               
            </Wrapper>
        </>
    );
}
export default Portfolio;