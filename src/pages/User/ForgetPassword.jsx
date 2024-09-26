import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ForgetPasswordAPI } from '../../services/appAPI'

function ForgetPassword() {

    const[emails,setEmails]= useState({
        email:''
    })



const forgetPass=async()=>{
   const {email} = emails
  if(!email){
    alert("please enter email")
  }
  else{
    const forgPass=await ForgetPasswordAPI(emails) 
    console.log(forgPass);
    
    if(forgPass.status == 200){
        alert('email sent successfully')
    }else{
        alert('Email not Registered')
    }
  }
}
console.log(emails);


  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'410px',width:'100%'}}>
      
         <div style={{width:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <h4 >Enter your registered email </h4>
              <p>The password reset link will be send to the email</p>
                   <form className='w-75 ' style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}  >
                        <Form.Control   className='w-50 mb-3' value={emails.email} onChange={(e)=>setEmails({...emails,email:e.target.value})} type="text" placeholder="Email" /> 
                
                        <Button  variant="primary" onClick={()=>forgetPass()} >Send link</Button>
                   </form>
         </div>
      
    </div>
  )
}

export default ForgetPassword
