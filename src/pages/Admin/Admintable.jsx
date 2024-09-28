import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup, Modal, Table } from 'react-bootstrap'
import Adminedit from './Adminedit'
import { deleteProduct, getProduct } from '../../services/appAPI'
import { baseurl } from '../../services/Baseurl'

function Admintable() {
 

const [products,setProducts] = useState("")
useEffect(()=>{
  display()
},[])


 const display=async()=>{
  const result = await getProduct()

  setProducts(result?.data)
  console.log(result?.data);
  
}



const deleteProducts = async(id)=>{
  const token = sessionStorage.getItem('token')
  console.log(token);
  
  if(token)
  {
    var reqHeader={
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    }

    const result = await deleteProduct(id,reqHeader)
    console.log(result);
    
    
    if(result.status == 200)
    {
      alert('product deletion successfull')
      
    }
    else{
      alert('error')
    }
    
  }
}

  return (
    

    
       <div style={{height:'500px'}}>
      <Table responsive="sm">
        <thead>
          <tr>
           
            <th>Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Description</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
           {
             products.length > 0 ?
             
            products.map((item,index)=>(
          
          <tr key={index}>
            <td>{item?.pname}</td>
            <td>{item?.category}</td>
            <td><img src={item?`${baseurl}/uploads/${item.productimage}`:""} alt="product image" style={{width:'30px',height:'30px'}}/></td>
            <td>{item?.description}</td>
          
           
            <td> 
           <div className='d-flex'>
              <Adminedit products={item}/>
              <Button onClick={()=>deleteProducts(item._id)} variant="primary"><i class="fa-solid fa-trash"></i></Button>
           </div>
           </td>
          </tr>
))
 :"Nothing to display"}

         
        </tbody>
      </Table>
      
     

     



    </div>
  )
}

export default Admintable
