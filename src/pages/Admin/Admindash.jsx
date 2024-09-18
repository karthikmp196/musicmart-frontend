import React, { useState } from 'react'
import {   Col, Nav, Row, Tab, Tabs } from 'react-bootstrap'
import Adminform from './Adminform'
import Userdetails from './Userdetails'
import Orderdetails from './Orderdetails'

function Admindash() {
  const[key,setKey]=useState("")
  return (
    <div>
      <div style={{marginLeft:'10px',marginBottom:'10%'}}>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-5"
    >
     
      <Tab eventKey="profile" title="Dash">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="">
            <Nav.Item>
              <Nav.Link style={{height:'15vh'}} eventKey="first" >Registered users </Nav.Link>
            </Nav.Item>
            
           
            
            <Nav.Item>
              <Nav.Link style={{height:'15vh'}} eventKey="second">Available products</Nav.Link>
            </Nav.Item>
            
            
            <Nav.Item>
              <Nav.Link style={{height:'15vh'}} eventKey="Third">Placed orders</Nav.Link>
            </Nav.Item>
            
            
            <Nav.Item>
              <Nav.Link style={{height:'15vh'}} eventKey="four">Total Earnings</Nav.Link>
            </Nav.Item>
            
            
          </Nav>
          </Col>
         
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"><Userdetails/></Tab.Pane>
            <Tab.Pane eventKey="second"></Tab.Pane>
            <Tab.Pane eventKey="Third"><Orderdetails/></Tab.Pane>

          </Tab.Content>
        </Col>
        </Row>
      
    </Tab.Container>
      </Tab>
      <Tab eventKey="product" title="Products +" >
        <Adminform/>
      </Tab>
      <Tab eventKey="orders" title="Orders" >
      
      </Tab>
    </Tabs>
      </div>
    </div>
  )
}

export default Admindash
