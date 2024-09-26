import React, { useContext, useEffect, useState } from 'react'
import {Badge, Button, Container, Modal, ModalBody, Nav, Navbar} from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { headerContext } from '../context/header'
import { getFromCart } from '../services/appAPI'

function Header() {
  const[token,setToken] = useState()
  const[userName,setUserName] = useState()
  const navigate = useNavigate()
const{header,setHeader}= useContext(headerContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const[getProducts,setGetProducts]= useState([])

  const[count,setCount]=useState(0)
  useEffect(()=>{
 const data = sessionStorage.getItem('token')
 setToken(data)
 

  const userDetails = JSON.parse(sessionStorage.getItem('data'))
    console.log(userDetails?.fname);
   setUserName(userDetails?.fname)
  },[header])

  const logout=()=>{
    sessionStorage.clear()
    setShow(false);
    setHeader("Logout Successful")
    navigate('/login')
    
  }

  useEffect(()=>{
  display()
  },[header])
  
  const display=async()=>{
     const token = sessionStorage.getItem('token')
    const data = JSON.parse(sessionStorage.getItem('data'))  
    
    if(token){
      var reqHeader =
      {
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
      }
      const result = await getFromCart(data._id,reqHeader)
      setGetProducts(result?.data?.items)
      setCount(getProducts?.length)
    }
    else{
      navigate('/login')
    }
  
  }
  
  // console.log('items in headersss',getProducts);
  // console.log('count',count);
  

  
  return (
    <div>
      <div id='head'>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Music Mart</Modal.Title>
        </Modal.Header>
        <ModalBody></ModalBody>
        <Modal.Footer>
          <Button variant="secondary"onClick={logout} >
          <i class="fa-solid fa-right-from-bracket"></i>
          </Button>
<Link to={'/profile'}>
            <Button variant="primary" onClick={handleClose} >Edit profile</Button>
  
</Link>        </Modal.Footer>
      </Modal>
     



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

                
                
                <Link to={'/Cart'} ><Button style={{marginLeft:'30px',marginTop:'3px'}} variant="outline-primary"><i class="fa-solid fa-cart-shopping"></i>  <Badge bg="secondary">{count}</Badge></Button></Link>

              </Nav>
               
               
               
               {

                token?

                (<Button   style={{marginRight:'20px'}} variant="outline-primary" onClick={handleShow}>{userName}</Button>)
               
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