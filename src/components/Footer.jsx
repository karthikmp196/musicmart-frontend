import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div id='foot' >
     <div className='row m-3'>
      <Col style={{marginTop:'30px'}} lg={6} md={3} sm={12}>
    <Link to={'/Admindash'} ><i class="fa-solid fa-music"></i></Link> Designed and built with all the love in the world <br /> 
             by the MM team with the help of our contributors. <br />
            Code licensed MM team, docs CC BY 3.0.
            </Col>
        
            <Col style={{marginTop:'30px'}} lg={3} md={3} sm={12} className='footer'> 
    <ul style={{listStyle:'none'}}>
      
               <Link  to="/"> <li style={{color:'white'}}>Home</li> </Link>
               <Link to='/About'><li style={{color:'white'}}>About</li></Link>
               <Link to='/Contact'><li style={{color:'white'}}>Contact</li></Link>
                <Link to='/Cart'><li style={{color:'white'}}>Cart</li></Link> 
                

    </ul>
             
             
  </Col> 
  
  
  
  
  
 
    <Col style={{marginTop:'30px'}}  lg={3} md={3} sm={12} className='footer'>
    <h2 className='ftr' style={{color:'white'}}>Contact us</h2>
    <input className='ftr' type="text" placeholder='Enter mail id' />
    <button style={{backgroundColor:'rgb(36, 150, 232)',color:'white'}}>Subscribe</button> <br />
    <a className='ftr' href=''><i style={{padding:'20px',color:'white'}} class="fa-brands fa-facebook"></i></a>           
  
    <a href=''><i style={{padding:'20px',color:'white'}} class="fa-brands fa-instagram"></i></a> 
    
    <a href=''><i style={{padding:'20px',color:'white'}} class="fa-brands fa-twitter"></i></a>
    <a href=''><i style={{padding:'20px',color:'white'}} class="fa-brands fa-linkedin"></i></a>
    </Col> 
 
    </div>
  
     
     





    


 
 
  
 
   
    
 
  
  
     
     <div style={{color:'white'}} id='copy'>Copyright  © 2024  MusicMart. Built with React.</div> 






    </div>

    
  )
}

export default Footer
