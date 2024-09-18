import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { googleRegister, loginAPI } from '../services/appAPI';

function Login() {
  const navigate = useNavigate()

const [loginDetails,setLoginDetails] =useState({
  email:"",
  password:""
})

const[googleLoginDetails,setGoogleLoginDetails] = useState({
  email:"",
  fname:"",
  lname:"",
  profileimg:"",
  googleID:""
})
const display=async(e)=>{
e.preventDefault()
const{email,password} = loginDetails
if(!email||!password)
{
  alert("please fill the form")
}
else{
 const loginResult = await loginAPI(loginDetails)
   if(loginResult.status==200)
   {
   alert("Login successfull")
   
   sessionStorage.setItem("data",JSON.stringify(loginResult.data.userExist))
   sessionStorage.setItem("token",loginResult.data.token)
   if(loginResult.data.userExist.role == 1)
   {
    navigate('/Admindash')
   }
   else{
    navigate('/Home')
   }
   
   }
   else
   {
   alert("invalid username or password")
   }
}

}

const googleDisplay=async(e)=>{
const{email,fname,lname,profileimg,googleID} = googleLoginDetails

if(!email||!fname||!lname)
{
  alert("please fill the form")
}
else
  {
    
    const googleLoginResult = await googleRegister(googleLoginDetails)
    sessionStorage.setItem("data",JSON.stringify())


  }

}

 
  return (
    <div id='login'>
      <div id='login2' >
        <h1>User Login</h1>
      <Form.Control  className='w-75' type="text" value={loginDetails.email} placeholder="Username" onChange={(e)=>setLoginDetails({...loginDetails,email:e.target.value})} /> <br />
      <Form.Control  className='w-75' type="password" value={loginDetails.password} placeholder="Password" onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})} /> <br />
      <Button onClick={display} variant="primary">Login</Button> 
      or
      
      <GoogleLogin
  onSuccess={credentialResponse => {
    const token=jwtDecode(credentialResponse?.credential)
    console.log(token);
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
     <br /> <a style={{textDecoration:'none'}} href="">Forget password?</a> <br />
     <div> Dont have an account?

     <Link to={'/Register'} ><a style={{textDecoration:'none'}} href="">Create account</a></Link>
  
      </div>
      </div>
    </div>
  )
}

export default Login
