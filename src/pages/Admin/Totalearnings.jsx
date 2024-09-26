import React, { useEffect, useState } from 'react'
import { getFromCart } from '../../services/appAPI'
import { Card } from 'react-bootstrap'

function Totalearnings() {

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






  return (
    <div>
      <Card style={{margin:'20px',width: '20rem',height:'30rem',display:'flex',justifyContent:'center',alignItems:'center',padding:'20px' }} >
        <Card.Body>
          <Card.Title>Total Earnings</Card.Title>
          <Card.Text>
            {sum}
          </Card.Text>
        </Card.Body>
      </Card> 
    </div>
  )
}

export default Totalearnings
