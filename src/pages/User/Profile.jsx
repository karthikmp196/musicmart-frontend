import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image } from 'react-bootstrap'


function Profile() {
const [userName,setUserName] = useState()
const[token,setToken] = useState()
const[email,setEmail] = useState()
const[profile,setProfile]= useState()
const[preview,setPreview] = useState(null)
const[userData,setUserData]=useState()
useEffect(()=>{
  const tok = sessionStorage.getItem('token')
  setToken(tok)
const data=JSON.parse(sessionStorage.getItem('data'))
setUserData(data)
console.log(userData);
},[])

const[editProfile,setEditProfile] = useState({
  // id:users1?._id,
  fname:userData?.fname,
  lname:userData?.lname,
   profileimg:userData?.profileimg,
  address:userData?.address
  
})   


useEffect(()=>{
  if(editProfile.profileimg){
    setPreview(URL.createObjectURL(editProfile.profileimg))
  }
},[editProfile.profileimg])


const updateProfile=async(e)=>{
  e.preventDefault()
  const{fname,lname,address,profileimg} = editProfile
if(!fname||!lname||!address){
  alert("please enter the form")
}
else{
  const reqBody = new FormData()
  // reqBody.append("id",id)

  reqBody.append("fname",userData.fname)
  reqBody.append("lname",userData.lname)
  preview? reqBody.append("profileimg",profileimg): reqBody.append("profileimg",userData.profileimg)
  reqBody.append("address",userData.address)

 if(token){
  var reqHeader = {
    "Content-Type": "multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
 }

 const result = await editProfile(userData?._id,reqBody,reqHeader)
 console.log(result);

 if(result.status == 200){
  setEditProfile('')
  alert('profile updated successfully')
  
 }
 else{
  alert("incorrect data entry")
 }
 

}
}



  return (
     <div id='profile'>
      <div id='profile2'>
      
   
           
             {
              token?
              (<>
                
                  <Image style={{marginTop:'10px',width:'30%'}} src= "profile"  roundedCircle />
                
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.fname}  className='w-75' type="text" placeholder="Username" onChange={(e)=>setEditProfile({...editProfile,fname:e.target.value})} /> 
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.lname}  className='w-75' type="text" placeholder="Username" onChange={(e)=>setEditProfile({...editProfile,lname:e.target.value})} /> 

                  <Form.Control style={{marginTop:'20px'}} value={email} className='w-75' type="email" placeholder="Email" disabled/> 
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.address} className='w-75' type="text" placeholder="Address" onChange={(e)=>setEditProfile({...editProfile,address:e.target.value})}/> 
                  <Button  style={{margin:'20px'}} variant="primary" onClick={(e)=>updateProfile(e)} >submit</Button>

              </>)
                : 
                (<>
                  <Image style={{marginTop:'10px',width:'30%'}} src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"  roundedCircle />
                  
                  <Form.Control style={{marginTop:'20px'}}  value={editProfile?.fname}   className='w-75' type="text" placeholder="Username" onChange={(e)=>setEditProfile({...editProfile,fname:e.target.value})} /> 
                  <Form.Control style={{marginTop:'20px'}}  value={editProfile?.lname}   className='w-75' type="text" placeholder="Username" onChange={(e)=>setEditProfile({...editProfile,lname:e.target.value})} /> 

                  <Form.Control style={{marginTop:'20px'}}  className='w-75' type="text" placeholder="Email" disabled/> 
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.address} className='w-75' type="text" placeholder="Address" onChange={(e)=>setEditProfile({...editProfile,address:e.target.value})}/> 
                  <Button  style={{margin:'20px'}} variant="primary" onClick={(e)=>updateProfile(e)} >submit</Button>

                </>)


             }
             



      
      </div>
     </div>
  )
}

export default Profile
