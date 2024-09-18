import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { productAPI } from '../../services/appAPI'

function Adminform() {

const[productData,setProductData] = useState({
  pimage:"",
  pname:"",
pcategory:"",
price:"",
pdescription:""
})

const [products,setProducts] = useState("")





const[preview,setPreview] = useState(null)
const[token,setToken] = useState()


useEffect(()=>{
  if(productData.pimage){
    setPreview(URL.createObjectURL(productData.pimage))
  }
},[productData.pimage])

useEffect(()=>{
  const userToken = sessionStorage.getItem('token')
  setToken(userToken)
},[])

const addData=async(e)=>{
  e.preventDefault()
  const{pimage,pname,pcategory,price,pdescription} = productData
  if(!pimage||!pname||!pcategory||!price||!pdescription)
  {
    alert("please fill the form")
  }
  else{
     const reqBody = new FormData()
     reqBody.append("pimage",pimage)
     reqBody.append("pname",pname)
     reqBody.append("pcategory",pcategory)
     reqBody.append("price",price)
     reqBody.append("pdescription",pdescription)

if(token)
{
 var reqHeader={
    "Content-Type" : "multipart/form-data",
    "Authorization" : `Bearer ${token}`
  }
}

const result = await productAPI(reqBody,reqHeader)
console.log(result);
alert("Product added")


  }

}

console.log(token);
console.log(productData);




console.log(productData.pname);

  return (
    <div id='admin' style={{width:'100%'}} >
         
       <div style={{width:'70%'}} id='adminform' className='m-3'>
       <h1 style={{marginLeft:'20px'}}>Product Details</h1>
          <Form action="" >


          <label>
          <input type="file" style={{display:'none'}} onChange={(e)=>setProductData({...productData,pimage:e.target.files[0]})}/>
          <img src=  {preview?preview:"https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" } style={{width:'40%',margin:'20px'}}  alt="image"  /> 
          </label>
          <br />
          <Form.Control  className='w-75' type="text" value={productData.pname} placeholder="pname" onChange={(e)=>setProductData({...productData,pname:e.target.value})} /> <br />
          <Form.Control  className='w-75' type="text" value={productData.pcategory} placeholder="category" onChange={(e)=>setProductData({...productData,pcategory:e.target.value})} /> <br />
          <Form.Control  className='w-75' type="text" value={productData.price} placeholder="price" onChange={(e)=>setProductData({...productData,price:e.target.value})} /> <br />
          
         
            
    
            <Form.Group className="mb-3" style={{width:'75%'}} >
            <Form.Label>description</Form.Label>
            <Form.Control as="textarea" rows={3} value={productData.pdescription} onChange={(e=>setProductData({...productData,pdescription:e.target.value}))} />
          </Form.Group>

          <Button style={{marginRight:'20px'}} onClick={(e)=>addData(e)} variant="primary" >Add</Button>

          <Link to={'/Admintable'}><Button variant="primary">View</Button></Link>
          </Form>
       </div>
    </div>
  )
}

export default Adminform
