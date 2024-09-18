import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { getFromCart, removeFromCart } from '../../services/appAPI'
import { baseurl } from '../../services/Baseurl'
import { useNavigate } from 'react-router-dom'



function Cart() {

  const navigate = useNavigate()

const[getProducts,setGetProducts]= useState([])

useEffect(()=>{
display()
},[])


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
       
  }

}


const del=async(pid)=>{
    
const delToken = sessionStorage.getItem('token')
const delData = JSON.parse(sessionStorage.getItem('data'))



if(delToken){
  var reqHeader = 
  {
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${delToken}`
  }
const res= await removeFromCart(delData._id,pid,reqHeader)
if(res.status==200){
  alert("product deleted")
  display()
}

}
}

  
 
 
 
 
 
  
  return (
    <div >
      <Row>
      
{
        getProducts.length > 0?
        getProducts.map((item,index)=>(

      <Col lg={3} md={4} sm={1}>   
          <Card style={{margin:'20px',width: '20rem',height:'30rem',display:'flex',justifyContent:'center',alignItems:'center',padding:'20px' }}>
        <Card.Img variant="top" src={item?`${baseurl}/uploads/${item.pid.productimage}`:""} />
        <Card.Body>
          <Card.Title>{item?.pid.pname}</Card.Title>
          <Card.Text>
            {item?.pid.description}
          </Card.Text>
          <Button onClick={()=>del(item?.pid._id)} variant="primary"><i class="fa-solid fa-trash"></i></Button>
        </Card.Body>
      </Card> 


      
      </Col>
        ))
        
:"No products"
       
      }

</Row>
      </div>
    
  )
}

export default Cart
