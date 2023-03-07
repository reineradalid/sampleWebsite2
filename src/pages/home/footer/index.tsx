import React, { useState, useEffect, Component } from 'react'


import { 
    Wrapper,
    Container,
    Logo,
    Icon
   
} from './constant'

import {
    PictureOutlined
  } from '@ant-design/icons';
  import { Divider } from 'antd';
  
  


  const logo = "https://upload.wikimedia.org/wikipedia/commons/8/8f/Gaana_logo.png"

  const icon = [
    {
        icon:"https://cdn-icons-png.flaticon.com/512/124/124010.png", 
        link:"https://codesandbox.io/"
    },
    {
        icon:"https://cdn-icons-png.flaticon.com/512/174/174857.png", 
        link:"https://codesandbox.io/"
    },
    {
        icon:"https://cdn-icons-png.flaticon.com/512/174/174855.png", 
        link:"https://codesandbox.io/"
    }
]
const Footer = () =>{

    const sample =[1,2,3]
    const bg ="https://weblium.com/blog/wp-content/uploads/2019/01/image1-1000x534.png"
    const img ="https://previews.123rf.com/images/rawpixel/rawpixel1606/rawpixel160636720/58613117-business-people-meeting-discussion-corporate-handshake-concept.jpg"
    return(
        <>
            <Wrapper >
                <Container >
                    <Logo style={{backgroundImage:`url(${logo})`}} />
                   
                    <div style={{display:"flex", flexDirection:"row",width:"200px", justifyContent:"space-between", marginBottom:"10px"}}>
                    {
                        icon.map(item=>
                        <a href={item.link} target="_blank">
                            <Icon style={{backgroundImage:`url(${item.icon})`}}/>
                        </a>
                            
                            
                            )
                    }
                        
                    </div>
                    <h3 style={{color:"#FFF"}}>
                        Follow Us
                    </h3>
                    
                </Container>
               
            </Wrapper>
        </>
    );
}
export default Footer;