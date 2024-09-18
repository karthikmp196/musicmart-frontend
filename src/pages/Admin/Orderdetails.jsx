import React from 'react'
import { Table } from 'react-bootstrap'

function Orderdetails() {
  return (
    <div>
       <h1>Order Details</h1> <br />
     
     <Table responsive="sm" >
       <thead>
         <tr>
           <th>#</th>
           <th>Category</th>
           <th>Productname</th>
           <th>Username</th>
           <th>Email</th>
           <th>Address</th>
           <th>Amount paid</th>
           
           
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
         </tr>
         
         
       </tbody>
     </Table>

    </div>
  )
}

export default Orderdetails
