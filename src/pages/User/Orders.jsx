import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { UserorderDetails } from '../../services/appAPI'
import { baseurl } from '../../services/Baseurl'
import { useNavigate } from 'react-router-dom'

function Orders() {
    const [details,setDetails] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
      display()
    },[])

  const display = async()=>{
    
    const user = JSON.parse(sessionStorage.getItem('data'))
    console.log(user._id);
    
    const token = sessionStorage.getItem('token')
    console.log(token);
    
    if(token)
    {
      const orders = await UserorderDetails(user._id)
      setDetails(orders.data)
      console.log(orders);
      
     
      

    }
   
    else{
        alert('please login')
        navigate('/login')
    }
  }
  console.log(details);

  return (
    <div>
       <h1>Order Details</h1> <br />
     
     <Table responsive="sm" >
       <thead>
         <tr>
           
           <th>Product Name</th>
           <th>Price</th>
           <th>Description</th>
           <th>Image</th>
           
          
           
           
         </tr>
       </thead>
       <tbody>
        {
           details?.length>0 ?
            details.map((items,index)=>( 
            items.order.map((item)=>(
         <tr key={index}>
            <td>{item?.pid.pname}</td>
           <td>{item?.pid.price}</td>
           <td>{item?.pid.description}</td>
           <td><img src={item?`${baseurl}/uploads/${item.pid.productimage}`:"img"} alt="product image" style={{width:'30%',height:'20%'}}/></td> 
           
         </tr>
         )) )):"Empty"}
          
       </tbody>
     </Table>
    </div>
  )
}

export default Orders
