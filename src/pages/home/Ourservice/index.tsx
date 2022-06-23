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
    SettingFilled
  } from '@ant-design/icons';
import { relative } from 'path';

const Service = () =>{


    const [opacity, setOpacity] = useState(false)
    const [activeIndex, setIndex] = useState(-1)

 const img ="https://wallpaper.dog/large/20504518.jpg"
 const bg ="https://www.techrepublic.com/a/hub/i/r/2017/12/06/f52bed25-1adf-4e42-8cba-65de10538b90/resize/1200x/5d529c82e722c7a32b6144fdccec1f5d/ijeabistock-659493016.jpg"
 
 const handleMouse =(i:any) => {
    console.log(i)
    setIndex(i)
    

}
 const sample =[1,2,3]
 return(
        <>
            <Wrapper >
                <Container style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`}} >
                    <H1>
                       <span style={{color:"#ff6622"}}>OUR</span> SERVICES
                    </H1>
                    <P>
                       WHAT WE OFFER
                    </P>
                    <div style={{display:"flex", flexDirection:"row",alignItems: "center"}}>
                        <div style={{height:"2px", width:"100px", backgroundColor:"white"}}/>
                        <SettingFilled style={{color:"#fff", fontSize:"25px", margin:"0px 5px"}}/>
                        <div style={{height:"2px", width:"100px", backgroundColor:"white"}}/>
                    </div>

                    <ContentContainer >

                        {
                            sample.map((item,index)=>
                            
                        
                        <div
                            style={{
                               
                                borderRadius:"12px",
                                backgroundColor:"black",
                                height:"280px",
                                width:"380px",
                               transition: "1s",
                               overflow: "hidden",
                            }}
                            onMouseEnter={()=>handleMouse(index)}
                            onMouseOver={()=>setOpacity(true)}
                            onMouseLeave={()=>setIndex(-1)}
                            >
                            <div
                                style={{
                                    backgroundColor:"black",
                                    opacity:"0.2",
                                    position:"absolute",
                                    zIndex:2,
                                    height:"280px",
                                    width:"380px",
                                    borderRadius:"12px",
                                    justifyContent:"flex-end",
                                    color:"#ff6622",
                                    display: "flex",
                                    overflow: "hidden",
                                   
                                  
                                }}
                            >
                                <SettingFilled style={{fontSize:200, marginTop:-50, marginRight:-50}}/>
                            </div>
                            <div
                                style={{
                                    backgroundColor:"black",
                                    position:"absolute",
                                    zIndex:99,
                                    height:"280px",
                                    width:"380px",
                                    borderRadius:"12px",
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    color:"#ff6622",
                                    flexDirection:"column",
                                    opacity:activeIndex === index?"0":"1",
                                    overflow: "hidden",
                                }}
                            >
                              <SettingFilled style={{fontSize:30}}/>
                                <h3>
                                    Web Developer
                                </h3>
                            </div>
                            <div 
                                style={{
                                    color:"#fff",
                                    height:"280px",
                                    width:"380px",
                                    zIndex:3,
                                    position: "relative",
                                    backgroundColor:"transparent"
                                  
                                }}
                               
                                >
                                    <div style={{padding:"20px 20px"}}>
                                    <h3>
                                        Web Development
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and 
                                        typesetting industry. Lorem Ipsum has been the industry's 
                                        standard dummy text ever since the 1500s, when 
                                    </p>
                                    </div>

                            </div>
                           
                        </div>
                            )
                        }
                       
                       
                    </ContentContainer>
                    <Btn>
                        Learn More
                    </Btn>
                </Container>
               
            </Wrapper>
        </>
    );
}
export default Service;