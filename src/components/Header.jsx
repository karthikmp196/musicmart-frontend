import React, { useEffect, useState } from 'react'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  const[token,setToken] = useState()
  const[userName,setUserName] = useState()
 
  useEffect(()=>{
 const data = sessionStorage.getItem('token')
 setToken(data)
 

  const userDetails = JSON.parse(sessionStorage.getItem('data'))
    console.log(userDetails?.fname);
   setUserName(userDetails?.fname)
  },[])

 
 


  

  return (
    <div>
      <div id='head'>
          <Navbar  expand="lg" className="bg-body-tertiary">
          <Container fluid>
           <Link style={{textDecoration:'none'}} to='/'><Navbar.Brand href="#"><i class="fa-solid fa-music"></i> Music Mart</Navbar.Brand></Link> 
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link style={{textDecoration:'none',padding:'10px'}} to={'/About'} ><a  variant="outline-primary">About</a></Link>
                <Link style={{textDecoration:'none',padding:'10px'}} to={'/Contact'} ><a  variant="outline-primary">Contact</a></Link>
                <Link style={{textDecoration:'none',padding:'10px'}} to={'/Product'} ><a  variant="outline-primary">Shop</a></Link>

                {/* <Nav.Link href="#action2">Link</Nav.Link> */}

                
                
                <Link to={'/Cart'} ><Button style={{marginLeft:'30px',marginTop:'3px'}} variant="outline-primary"><i class="fa-solid fa-cart-shopping"></i></Button></Link>
              </Nav>
             <Link to={'/Profile'}> <Button style={{marginRight:'20px'}} variant="outline-primary"><i class="fa-solid fa-user"></i></Button></Link>
               
               
               
               {

                token?

                (<Link to={'/profile'} ><Button   style={{marginRight:'20px'}} variant="outline-primary">{userName}</Button></Link>)
               
              :
              (                <Link to={'/Login'} ><Button   style={{marginRight:'20px'}} variant="outline-primary">Login </Button></Link>
            )
              
              }
                            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Header