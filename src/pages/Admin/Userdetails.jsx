import React from 'react'
import { Table } from 'react-bootstrap'

function Userdetails() {
  return (
    <div >
        <h1>User Details</h1> <br />
     
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Address</th>
                
                
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
              </tr>
              
              
            </tbody>
          </Table>
    
    </div>
  )
}

export default Userdetails
