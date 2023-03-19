import React, { useState, useEffect, Component } from 'react'

import { Container ,Logo,Wrapper} from './constant'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


interface Props {
    onClick?: () => void;
    type?: string;
    style?: object;
    className?: string;
    disabled?: boolean;
    height?:any;
    color?:any;
    bgColor?:any;
}

const Nav  : React.FC<Props> = ({ 
    onClick, 
    children, 
    type, 
    style, 
    className, 
    disabled,
    height, 
    color,
    bgColor
  })=>{

     
    const logo = "https://upload.wikimedia.org/wikipedia/commons/8/8f/Gaana_logo.png"
    
    return(
        <Wrapper style={{height:`${height}px`, color:color, backgroundColor:bgColor}}>
            <Container>
                <Logo style={{backgroundImage:`url(${logo})`}} />
                <div style={{color:color, display:"flex", justifyContent:"space-between", width:"40%"}}>
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}  style={{color:color,  textDecoration:" none",}} href="/">
                        Home
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000} style={{color:color,  textDecoration:" none",}} href="/">
                        About
                    </Link>
                    <Link activeClass="active" to="services" spy={true} smooth={true} duration={1000} style={{color:color,  textDecoration:" none",}} href="/">
                        Services
                    </Link>
                    <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1000} style={{color:color,  textDecoration:" none",}} href="/">
                        Portfolio
                    </Link>
                    {/* <a  >
                        <Signin/> / Sign Up
                    </a> */}
                    
                </div>
            </Container>
        </Wrapper>
    );
}
export default Nav;