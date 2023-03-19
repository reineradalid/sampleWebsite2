import React, { useState, useEffect, Component } from 'react'
import { Button, Modal } from 'antd';


import { 
  
} from './nav/constant'


interface Props {
  visible?:any;
}



const Signin  : React.FC<Props> = ({ 
  visible
})=>{
  
    return (
      <>
       
        <Modal title="Basic Modal" visible={visible} >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  };
  
  export default Signin;