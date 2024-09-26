import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { addToCartAPI, getProduct } from '../../services/appAPI'
import { baseurl } from '../../services/Baseurl'
import { Navigate, useNavigate } from 'react-router-dom'
import { headerContext } from '../../context/header'

function Product() {
const navigate = useNavigate()
const{setHeader}= useContext(headerContext)

  const [products,setProducts] = useState("")
useEffect(()=>{
  display()
},[])

const[pcount,setPcount] = useState(1) 
 const[selectProduct,setSelectProduct] = useState("")
 

 const display=async()=>{
  const result = await getProduct()

  setProducts(result?.data)
  setSelectProduct(result.data)
  // console.log(result?.data);
  
}


const categorize=(name)=>{
setProducts(selectProduct.filter(item=>item.category.includes(name)))

}

const addToCart=async(pid)=>{
  console.log("Inside cart");
  const userToken = sessionStorage.getItem('token')
  console.log(userToken);
  
  const data = JSON.parse(sessionStorage.getItem('data'))
  if(pid && pcount){
  const reqBody = new FormData()
  reqBody.append("pid",pid)
  reqBody.append("pcount",pcount)

if(userToken)
{
  var reqHeader =
  {
  "Content-Type" : "application/json",
  "Authorization" : `Bearer ${userToken}`
  }
  const result = await addToCartAPI(data._id,reqBody,reqHeader)
  setHeader(result)
  
  if(result.status==200)
 {
  alert("Product added to cart")
  
 }
else{
  alert("error")
   }
}else
{
  alert("Not logged in")
  navigate('/login')
}
 
}
}










  return (
    <div >
        <div id='product'> 
           <div>
                <Form.Select onChange={(e)=>categorize(e.target.value)} style={{marginTop:'20px',marginLeft:'20px',width:'100%'}} aria-label="Default select example">
                    <option hidden >category</option>
                    <option  value="guitar">Guitar</option>
                    <option value="violin">Violin</option>
                    <option value="keyboard">Keyboard</option>
                     </Form.Select> 
                     </div>
                        <div>
                             <Form.Control
                          type="text"
                          placeholder="Search"
                          
                          style={{width:'80%',marginTop:'20px'}}
                        />
                        </div>
           

               </div>
                
        
          
           
            {/* </Form> */}
      
      <Row>
         {
          products.length>0 ?
  
            products.map((item,index)=>(
  
    <Col lg={3} md={4} sm={1} >
      
                   <Card style={{margin:'20px',width: '20rem',height:'30rem',display:'flex',justifyContent:'center',alignItems:'center',padding:'20px'}}>
                  <Card.Img variant="top" src={item?`${baseurl}/uploads/${item.productimage}`:""} style={{width:'60%',height:'40%'}} />
                  <Card.Body>
                    <Card.Title>{item?.pname}</Card.Title>
                    
                    <Card.Text>
                      {item?.description}
                    </Card.Text>
                    <Card.Text>
                     {item?.price}
                    </Card.Text>
                    <Button onClick={()=>addToCart(item._id)} variant="primary"><i class="fa-solid fa-cart-shopping"></i></Button>
                  </Card.Body>
                </Card>
                
                </Col>
                )) 
    
 
          : "Add products"
          
         } 
      </Row>
      

     
    </div>
  )
}

export default Product
