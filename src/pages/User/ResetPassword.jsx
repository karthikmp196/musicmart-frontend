import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { updatePasswordAPI } from '../../services/appAPI'







function ResetPassword() {
    const navigate = useNavigate()


const {token} = useParams()
const[message,setMessage]=useState()

const[password,setPassword]=useState()
const[confirmPassword,setConfirmPassword]=useState()



const[reset,setReset]=useState({
    password:'',
    confirmPassword:''
})


useEffect(()=>{
    const decoded = jwtDecode(token)
    const currentTime = Date.now()/1000
    console.log('decoded',decoded);
    console.log('current',currentTime);

    
    



if(decoded.exp<currentTime){
    setMessage("link expired")
    setTimeout(()=>{
        navigate('/ForgetPassword')
    },4000)

}

})


const updatePass=async(e)=>{
    const{password,confirmPassword} = reset
if(!password||!confirmPassword)
{
    alert("please enter password")
}
  
else
{
    if(password!=confirmPassword)
    {
        alert("password mismatch")
    }
    else{
        const result= await updatePasswordAPI(token,password)
        if(result.status==200)
        {
         alert("password updated")
     
        }
        else{
       
             alert("error!!")
        
            
             
          }
        }
    }
}



console.log(reset);


  return (
    <div  style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'410px'}}>
        {message?
        <p>{message}</p>:
     <>
         <h2>Reset your password</h2>
               <form className='w-50 ' style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}  >
                    <Form.Control   className='w-50 m-3' type="text" value={reset.password} placeholder="New password" onChange={(e)=>setReset({...reset,password:e.target.value})} /> 
                    <Form.Control  className='w-50 m-3' type="text" value={reset.confirmPassword} placeholder="confirm password" onChange={(e)=>setReset({...reset,confirmPassword:e.target.value})} /> 
            
                    <Button  variant="primary" onClick={(e)=>updatePass(e)} >Reset</Button>
               </form>
     </>
         }
    
    </div>
  )
}

export default ResetPassword
