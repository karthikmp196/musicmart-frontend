import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { googleRegister, loginAPI } from '../services/appAPI';
import { headerContext } from '../context/header';

function Login() {
  const navigate = useNavigate()

  const[userToken,setUserToken] = useState('')

  const{setHeader} = useContext(headerContext)

const [loginDetails,setLoginDetails] =useState({
  email:"",
  password:""
})

const[googleLoginDetails,setGoogleLoginDetails] = useState()
//   email:"",
//    fname:"",
//    lname:"",
//    profileimg:"",
//    googleID:""
// })

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
   setHeader(loginResult)
   sessionStorage.setItem("data",JSON.stringify(loginResult.data.userExist))
   sessionStorage.setItem("token",loginResult.data.token)
   if(loginResult.data.userExist.role == 1)
   {
    navigate('/Admindash')
   }
   else{
    navigate('/')
   }
   
   }
   else
   {
   alert("invalid username or password")
   }
}

}

const googleDisplay=async(glogin)=>{
 const id = glogin.aud
 const email = glogin.email
  const fname = glogin.given_name
  const lname = glogin.family_name
  const profileimg = glogin.picture 
  console.log(id,email,fname,lname,profileimg);
  

if(!id||!email||!fname||!lname)
{
  alert("login failed")
}
else
  {
    
    const googleLoginResult = await googleRegister(glogin)
    // console.log(googleLoginResult);
    
    if(googleLoginResult.status == 200){
      setHeader(googleLoginResult)
       sessionStorage.setItem("data",JSON.stringify(googleLoginResult.data.user))
       setUserToken(sessionStorage.setItem("token",googleLoginResult.data.token))



       navigate("/")
    }
    else{
      alert("buhgy")
    }

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
    const glogin=jwtDecode(credentialResponse?.credential)
    console.log(glogin);
     googleDisplay(glogin)
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
     <br /><Link to={'/ForgetPassword'}> <a style={{textDecoration:'none'}} href="">Forget password?</a> </Link><br />
     <div> Dont have an account?

     <Link to={'/Register'} ><a style={{textDecoration:'none'}} href="">Create account</a></Link>
  
      </div>
      </div>
    </div>
  )
}

export default Login
