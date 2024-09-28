import React, { useState } from 'react'
import { Button, FloatingLabel, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import { otpResendAPI, otpVerificationAPI, registerAPI } from '../services/appAPI'
import { useNavigate } from 'react-router-dom'
import Otp from './User/Otp'

function Register() {
  const navigate = useNavigate()
 

  const [data,setData] = useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    address:''
  })

// console.log(data);
const[otpVerify,setOtpVerify]=useState({
  email:'',
  otp:''
})

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


 
  // const[isfnamevalid,setIsfnamevalid] = useState(true)
  // const[islnamevalid,setIslnamevalid] = useState(true)
  // const[isemailvalid,setEmailvalid] = useState(true)
  // const[ispasswordvalid,setPasswordvalid] = useState(true)
  // const[isphonevalid,setIsphonevalid] = useState(true)
  //  const validate=(e)=>{
  //   const{name,value}=e.target
  //   if(name =='fname')
  //   {
  //     if(!value.match(/^[A-z\s\.]+$/)){
  //       setFname(value)
  //       setIsfnamevalid(false)
  //     }
  //     else{
  //       setFname(value)
  //       setIsfnamevalid(true)
  //     }
  //   }
  //   else if(name=='lname'){
  //     if(!value.match(/^[A-z\s\.]+$/)){
  //       setLname(value)
  //       setIslnamevalid(false)
  //     }
  //     else{
  //       setLname(value)
  //       setIslnamevalid(true)
  //     }
  //   }
  //   else if(name=='email')
  //     {
  //       if(!value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
  //       setEmail(value)
  //       setEmailvalid(false)
  //       }
    
  //     else{
  //       setEmail(value)
  //       setEmailvalid(true)
  //        }
  //   }
  //   else if(name=='password'){
  //     if(!value.match( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&amp;^])[A-Za-z\d@.#$!%*?&amp;]{8,15}$/))
  //     {
  //     setPassword(value)
  //     setPasswordvalid(false)
  //     }
  //     else{
  //       setPassword(value)
  //       setPasswordvalid(true)
  //     }
  //   }

  //   else if(name=='phone'){
  //     if(!value.match(/^[0-9]{10}$/))
  //       {
  //         setPhone(value)
  //         setIsphonevalid(false)
  //       }
  //     else
  //     {
  //       setPhone(value)
  //       setIsphonevalid(true)
  //     }
  //   }
  //   }
    
    // const submit=()=>{
    //  if(!name||!email||!password||!confirm)
    //  {
    //   alert("please fill the form")
    //  }
    //  else{
    //   alert(`${name},${email}`)
    //  }
              
    // }

   

const display=async(e)=>{
  e.preventDefault()
  const{fname,lname,email,password,address} = data
  if(!fname||!lname||!email||!password||!address)
  {
    alert("Please fill the form completely")
  }
  else{
    const result=await registerAPI(data)
  if(result.status==200)
  {
   
    alert("registration successfull")
    handleShow()
    // navigate('/login')
  }
  else{
    if(result.status==406)
    {
      alert("user already exist")
    }
    else{
    console.log(result);
    }
    
  }
  
  
  }
}


const otpVerification = async(e)=>{
  const{email,otp} = otpVerify 
  if(!email||!otp)
  {
      alert("please enter the fields")
  }
  else{
          const res = await otpVerificationAPI(otpVerify)
          console.log(res);
          if(res.status==200)
          {
              alert("Email is verified")
              handleClose()
              navigate('/')
          }
          else{
            alert("otp mismatch")
          }
      }
  
}
console.log(otpVerify);
















  return (
    <div id='register'>
     
        <div id='register2'>
            <h1>Register</h1>
        <Form.Control className='w-75' name='fname' value={data.fname} type="text" placeholder="Firstname" onChange ={(e)=>setData({...data,fname:e.target.value})} /> 
        <br />
        <Form.Control className='w-75' name='lname' value={data.lname} type="text" placeholder="Lastname" onChange ={(e)=>setData({...data,lname:e.target.value})} /> 
       <br />
        <Form.Control className='w-75' name='email' value={data.email} type="text" placeholder="Email" onChange ={(e)=>setData({...data,email:e.target.value})} /> 
       <br />
        <Form.Control className='w-75' name='phone' value={data.phone} type="text" placeholder="Phone" onChange = {(e)=>setData({...data,phone:e.target.value})}/> 
       <br />
        <Form.Control className='w-75' name='password' value={data.password} type="password" placeholder="password" onChange={(e)=>setData({...data,password:e.target.value})} /> 
       <br />
        <FloatingLabel
        controlId="floatingTextarea"
        label="Address"
        className='w-75'
        onChange={(e)=>setData({...data,address:e.target.value})}
      >
        <Form.Control as="textarea" placeholder="" />
      </FloatingLabel>
        <br />       
        <Button  variant="primary" onClick={display}>Submit</Button>

        </div>




        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Email verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3"></InputGroup>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Email'
           value={otpVerify.email}
           onChange={(e)=>setOtpVerify({...otpVerify,email:e.target.value})}
            />
             <InputGroup className="mb-3"></InputGroup>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='OTP'
           value={otpVerify.otp}
           onChange={(e)=>setOtpVerify({...otpVerify,otp:e.target.value})}
            />
<br />
         
            <Button style={{width:'40%'}} variant="primary" onClick={(e)=>otpVerification(e)}> Verify</Button>
            
            <br />
         
            <Otp/>
 </Modal.Body>
 </Modal>



     
    </div>
  )
}

export default Register
