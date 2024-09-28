import React, { useState } from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { otpResendAPI } from '../../services/appAPI';

function Otp() {


    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[otpResend,setOtpResend]=useState({
        email:''
      })
      

    const resendOtp = async(e)=>{
        const{email}=otpResend
        if(!email)
        {
          alert("Please enter the fields")
        }
        else{
          const result = await otpResendAPI(otpResend)
          if(result.status==200)
          {
            alert("otp resend successfull")
            handleClose()
          }
          else{
            alert("check your mail")
          }
        }
      }
  return (
    <div>
                   

    <>
    <Button style={{width:'40%'}} variant="primary" onClick={handleShow}> Resend Otp</Button>
          <Modal
    
    show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}>
    <Modal.Header closeButton>
            <Modal.Title>Email verification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3"></InputGroup>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder='Email'
             value={otpResend.email}
             onChange={(e)=>setOtpResend({...otpResend,email:e.target.value})}
              />
               <Button variant="primary" onClick={(e)=>resendOtp(e)}> Resend</Button>
               </Modal.Body>
               </Modal>
    </>
    </div>
  )
}

export default Otp
