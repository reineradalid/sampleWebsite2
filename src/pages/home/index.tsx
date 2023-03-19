import React, { useState, useEffect, } from 'react'

import {  Element, } from 'react-scroll'

import Nav from  './nav/index'
import Hero from './hero/hero'
import About from './aboutUs/index.js'
import Service from './Ourservice/index'
import Portfolio from './portfolio/index'
import Footer from './footer/index'
import Signin from './signin'

const Home = () =>{

    const [color, setColor] = useState("#fff")
    const [bgcolor, setBgColor] = useState("")
    const [height, setHeight] = useState(60)
    const [visible, setVisible] =useState(true)


      useEffect(() => {
        const onScroll: EventListener = (event: Event) => { // <-- DOM-EventListener
            if (window.scrollY > 200) {
                setColor("#191919")
                setBgColor("#fff")
                setHeight(80)
                console.log("scroll down");
            } else {
                setColor("#fff")
                setBgColor("")
                setHeight(60)
                console.log("scroll up");
            }
        };
    
        const win: Window = window;   
        win.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      
      },[]);

      const defHeight = height ;
      const defColor = color;
      const defBgColor = bgcolor;

    return(
        <div style={{ display:"flex", justifyContent:"center", maxWidth:"100vw", flexDirection:"column"}}>
            <Nav height={defHeight} color={defColor} bgColor={defBgColor}/>
            <Element name="home" className="element">
                <Hero/>
            </Element>
            <Element name="about" >
                <About/>
            </Element>
            <Element name="services">
                <Service/>
            </Element>
            <Element name="portfolio">
                <Portfolio/>
            </Element>
            <Element name="portfolio">
                <Footer/>
            </Element>
           {/* <Signin visible={visible} /> */}
        </div>
    );
}

export default Home;