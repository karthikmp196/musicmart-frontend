import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { showUsersAPI } from '../../services/appAPI'

function Userdetails() {

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
      const regUsers = await showUsersAPI()
      setDetails(regUsers.data)

    
       
   
    }
  }

console.log(details);






  return (
    <div >
        <h1>User Details</h1> <br />
     
          <Table responsive="sm">
            <thead>
              <tr>
               
                <th>UserId</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                
                
              </tr>
            </thead>
            <tbody>
              {
                details.length>0?
                details.map((item,index)=>(
                  <tr key={index}>
                 
                  <td>{item._id}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.email}</td>
                  
                </tr>



                ))
                
             
              :""
                
              }
            </tbody>
          </Table>
    
    </div>
  )
}

export default Userdetails
