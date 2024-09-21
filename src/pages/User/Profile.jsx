import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image } from 'react-bootstrap'


function Profile() {
const [userName,setUserName] = useState()
const[token,setToken] = useState()

const[profile,setProfile]= useState()
useEffect(()=>{
  const data = sessionStorage.getItem('token')
  setToken(data)

const userData=JSON.parse(sessionStorage.getItem('data'))
setUserName(userData?.fname)
setProfile(userData?.profileimg)

// console.log(userData);


},[])



  return (
     <div id='profile'>
      <div id='profile2'>
      
   
           
             {
              token?
              (<>
                
                  <Image style={{marginTop:'10px',width:'30%'}} src= "profile" roundedCircle />
                
                  <Form.Control style={{marginTop:'20px'}} value={userName}  className='w-75' type="text" placeholder="Username" /> 
    
                  <Form.Control style={{marginTop:'20px'}}  className='w-75' type="email" placeholder="Email" disabled/> 
                  <Form.Control style={{marginTop:'20px'}}  className='w-75' type="password" placeholder="Password" /> 
                
              </>)
                : 
                (<>
                  <Image style={{marginTop:'10px',width:'30%'}} src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" roundedCircle />
                  
                  <Form.Control style={{marginTop:'20px'}}   className='w-75' type="text" placeholder="Username" /> 
    
                  <Form.Control style={{marginTop:'20px'}}  className='w-75' type="text" placeholder="Email" disabled/> 
                  <Form.Control style={{marginTop:'20px'}}  className='w-75' type="password" placeholder="Password" /> 
    
                </>)
             }
             



      
      </div>
     </div>
  )
}

export default Profile
