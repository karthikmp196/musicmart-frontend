import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, ModalBody, Row } from 'react-bootstrap'
import { deleteProductAPI, getFromCart, order, removeFromCart } from '../../services/appAPI'
import { baseurl } from '../../services/Baseurl'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



function Cart() {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
const[ResponseId,setResponseId]= useState("")
// const[ResponseState,setResponseState]=useState([])
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
  else{
    alert("please login")
    navigate('/login')
  }

}

// console.log('itisthecartpagre',getProducts);


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
const[sum,setSum] = useState(0)

const totalSum=()=>{
  if(getProducts?.length>0)
  {
    var total = getProducts.map(n=>Number(n.pid.price))
    setSum(total.reduce((n1,n2)=>n1+n2))
    console.log(total);
    
  }
}

useEffect(()=>{
  totalSum()
},[display])




 const payToken = sessionStorage.getItem('token')



const clear=async()=>{
  const uid = JSON.parse(sessionStorage.getItem('data'))
  const token = sessionStorage.getItem('token')
  console.log(uid);
  
  if(token)
  {
    var  reqHeader={
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
    }
      const result=  await deleteProductAPI(uid._id,reqHeader)
      console.log(result);
    if(result.status==200)
    {
      display()
    }
    else{
      alert("Error")
    }
     
  }
}






const loadScript=(src)=>{
  return new Promise((resolve)=>{
const script= document.createElement("script")
script.src = src

script.onload=()=>{
resolve(true)
}

script.onerror=()=>{
resolve(false)
}
document.body.appendChild(script);
  })
}

const razorPayOrder=(amount)=>{
let data = {
amount:amount,
currency:"INR"
}


let config={
method: "post",
maxBodyLength:Infinity,
url:" http://localhost:4000/orders",
header:{
'Content-Type':'application/json',
},
data:data
}


axios.request(config)
.then((response)=>{console.log(JSON.stringify(response.data));
handleRazorPayScreen(response.data.amount)
})
.catch((error)=>
{
console.log('error',error);

})
}

const handleRazorPayScreen=async(amount)=>{
  const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")

if(!res)
{
alert("Some error at razorpay loading")
return;
}

const options={
key:'rzp_test_YWob3NoKy2p5h6',
amount:amount,
currency:'INR',

handler:function(response)
{
placeOrder(response.razorpay_payment_id)
},

theme:{
color:"#F4C430"
}
}
const paymentObject = new window.Razorpay(options)
paymentObject.open()

}
console.log(ResponseId);


const placeOrder=async(id)=>{  
   const uid = JSON.parse(sessionStorage.getItem('data'))
   const token = sessionStorage.getItem('token')
   
if(id){
  if(token){
  var  reqHeader={
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
    }
    console.log(token);
    


    const reqBody = {
    paymentId : id,
    products : getProducts,
    amount : sum
    }

  const result = await order(uid._id,reqBody,reqHeader)

  if(result.status==200)
  {
    alert("success")
    handleClose()
   clear()
   console.log(result);
   
  }
  else{
    alert("error")
  }
}
}
}


 
  
  return (
    <div >




     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <ModalBody>Total:{sum}</ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>razorPayOrder(sum)} >Place Order</Button>
        </Modal.Footer>
      </Modal>
     
      <Row>
      
{
        getProducts?.length > 0? ( 
          getProducts?.map((item,index)=>(
      <Col lg={3} md={4} sm={1}>   
          <Card style={{margin:'20px',width: '20rem',height:'30rem',display:'flex',justifyContent:'center',alignItems:'center',padding:'20px' }} key={index}>
         <Card.Img variant="top" src={item?`${baseurl}/uploads/${item.pid.productimage}`:""} style={{width:'60%',height:'40%'}} /> 
        <Card.Body>
          <Card.Title>{item?.pid.pname}</Card.Title>
          <Card.Text>{item?.pid.price}</Card.Text>
          <Card.Text>
            {item?.pid.description}
          </Card.Text>
          <Button onClick={()=>del(item?.pid._id)} variant="primary"><i class="fa-solid fa-trash"></i></Button>
        </Card.Body>
      </Card> 

     
      
      </Col>
      
         ))
)

        : <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img  src="http://kartwiz.com/Assets/web/images/empty_cart.png" alt="" /></div>
       
      }


</Row>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  
<Button  style={{margin:'20px'}} variant="primary" onClick={handleShow}>makepayment</Button>

  <Link to={'/userOrders'}><Button>Order Details</Button></Link>
</div>
      </div>
    
  )
}

export default Cart
