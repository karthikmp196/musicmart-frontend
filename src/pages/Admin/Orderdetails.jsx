import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { orderDetails } from '../../services/appAPI'
import { baseurl } from '../../services/Baseurl'

function Orderdetails() {

  const [details,setDetails] = useState([])
  const [data,setData] = useState([])

  useEffect(()=>{
   display()
  },[])

  const display = async()=>{
    const user = JSON.parse(sessionStorage.getItem('data'))
    const token = sessionStorage.getItem('token')
    if(token)
    {
      const orders = await orderDetails()
      setDetails(orders.data)
      
       
   
    }
  }
 console.log(details);
 console.log(data);
 
 
  return (
    <div>
       <h1>Order Details</h1> <br />
     
     <Table responsive="sm" >
       <thead>
         <tr>
           <th>Payment ID</th>
           <th>User ID</th>
           <th>Productname</th>
            
          
           <th>Price</th>
           <th>ProductImage</th>
           
           
         </tr>
       </thead>
       <tbody>      

      {
        details.length>0?
        
          details.map((item,index)=>(
         item.order.map((items)=>(
         <tr key={index}>
           <td>{item.paymentId}</td>
           <td>{item.userid}</td>
          
         
              <td>{items.pid.pname}</td>
              <td>{items.pid.price}</td> 
              <td><img src={items?`${baseurl}/uploads/${items.pid.productimage}`:"img"} alt="product image" style={{width:'30%',height:'20%'}}/></td>
             
              
           
         
         </tr>
        
        ))))
         :""
        
}    
        
       </tbody>
     </Table>

    </div>
  )
}

export default Orderdetails
