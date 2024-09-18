import React from 'react'
import { Button, Col, Container, Form, Image } from 'react-bootstrap'


function Profile() {
  return (
    <div id='profile'>
      <div id='profile2'>
      
   
       
              <Image style={{marginTop:'10px',width:'30%'}} src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" roundedCircle />
            
              <Form.Control style={{marginTop:'20px'}}  className='w-75' type="text" placeholder="Username" /> 

              <Form.Control style={{marginTop:'20px'}}  className='w-75' type="text" placeholder="Email" disabled/> 
              <Form.Control style={{marginTop:'20px'}}  className='w-75' type="password" placeholder="Password" /> 



      </div>
    </div>
  )
}

export default Profile
