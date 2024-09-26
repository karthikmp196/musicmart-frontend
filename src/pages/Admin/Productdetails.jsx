import React, { useEffect, useState } from 'react'
import { getProduct } from '../../services/appAPI'
import { Card, Col, Row } from 'react-bootstrap'
import { baseurl } from '../../services/Baseurl'

function Productdetails() {

    const [products,setProducts] = useState("")

    const display=async()=>{
        const result = await getProduct()
      
        setProducts(result?.data)
    }

    useEffect(()=>{
        display()
    },[])

  return (
    <div>
      
      <Row>
         {
          products.length>0 ?
  
            products.map((item,index)=>(
  
    <Col lg={3} md={4} sm={1} >
      
                   <Card style={{margin:'20px',display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
                  <Card.Img variant="top" src={item?`${baseurl}/uploads/${item.productimage}`:""} style={{width:'60%',height:'40%'}} />
                  <Card.Body>
                    <Card.Title>{item?.pname}</Card.Title>
                    
                    {/* <Card.Text>
                      {item?.description}
                    </Card.Text>
                    */}
                  </Card.Body>
                </Card>
                
                </Col>
                )) 
    
 
          : "No products available"
          
         } 
      </Row>
    </div>
  )
}

export default Productdetails
