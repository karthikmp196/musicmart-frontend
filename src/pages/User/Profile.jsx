import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image, InputGroup } from 'react-bootstrap'
import { baseurl } from '../../services/Baseurl'
import { editProfileAPI } from '../../services/appAPI'


function Profile() {
// const [userName,setUserName] = useState()
const[token,setToken] = useState()
const[email,setEmail] = useState()
// const[profile,setProfile]= useState()
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
  // fname:userData?.fname,
  // lname:userData?.lname,
  // phone:userData?.phone,
  // address:userData?.address,
  // profileimg:userData?.profileimg,
  fname:JSON.parse(sessionStorage.getItem('data')).fname,
  lname:JSON.parse(sessionStorage.getItem('data')).lname,
  address:JSON.parse(sessionStorage.getItem('data')).address,
  phone:JSON.parse(sessionStorage.getItem('data')).phone,




  
})   

console.log(editProfile);



useEffect(()=>{
  if(editProfile.profileimg){
    setPreview(URL.createObjectURL(userData?.profileimg))
  }
},[editProfile?.profileimg])


const updateProfile=async(e)=>{
  e.preventDefault()
  const{fname,lname,address,phone,profileimg} = editProfile
if(!fname||!lname||!address||!phone){
  alert("please enter the form")
}
else{
  if(!token)
  {
    alert("Not logged in")
  }
  else{
      var reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
  const reqBody = new FormData()
  reqBody.append("fname",userData.fname)
  reqBody.append("lname",userData.lname)
  reqBody.append("phone",userData.phone)
  reqBody.append("address",userData.address)
  preview? reqBody.append("profileimg",userData.profileimg): reqBody.append("profileimg",userData.profileimg)

 
 const result = await editProfileAPI(userData?._id,reqBody,reqHeader)
 console.log(result);

 if(result.status == 200){
  alert('profile updated successfully')
  sessionStorage.setItem('data',JSON.stringify(result.data))
 
}
 else{
  alert("incorrect data entry")
 }
 

}
}
}



  return (
     <div id='profile'>
      <div id='profile2'>
      
   
           
             {
              token?
              (<>
                
                <InputGroup className='mb-3'>
           <label>
          <input type="file"  style={{display:'none'}}  onChange={(e)=>setEditProfile({...editProfile,profileimg:e.target.files[0]})}/>
          <img src={preview?preview: `${baseurl}/uploads/${userData.profileimg}`} alt="" style={{width:"30%"}} />
           </label>
           </InputGroup>
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.fname}  className='w-75' type="text" placeholder="fname" onChange={(e)=>setEditProfile({...editProfile,fname:e.target.value})} /> 
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.lname}  className='w-75' type="text" placeholder="lname" onChange={(e)=>setEditProfile({...editProfile,lname:e.target.value})} /> 

                  <Form.Control style={{marginTop:'20px'}} value={userData?.email} className='w-75' type="email" placeholder="Email" disabled/> 
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.phone} className='w-75' type="text" placeholder="Phone" onChange={(e)=>setEditProfile({...editProfile,phone:e.target.value})}/> 
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.address} className='w-75' type="text" placeholder="Address" onChange={(e)=>setEditProfile({...editProfile,address:e.target.value})}/> 
                  <Button  style={{margin:'20px'}} variant="primary" onClick={(e)=>updateProfile(e)} >submit</Button>

              </>)
                : 
                (<>
                  
                  <InputGroup className='mb-3'>
           <label>
          <input type="file"  style={{display:'none'}}  onChange={(e)=>setEditProfile({...editProfile,profileimg:e.target.files[0]})}/>
          <img src={preview?preview: `${baseurl}/uploads/${editProfile.profileimg}`} alt="" style={{width:"30%"}} />
           </label>
           </InputGroup>
                  <Form.Control style={{marginTop:'20px'}}  value={editProfile?.fname}   className='w-75' type="text" placeholder="fname" onChange={(e)=>setEditProfile({...editProfile,fname:e.target.value})} /> 
                  <Form.Control style={{marginTop:'20px'}}  value={editProfile?.lname}   className='w-75' type="text" placeholder="lname" onChange={(e)=>setEditProfile({...editProfile,lname:e.target.value})} /> 

                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.email} className='w-75' type="text" placeholder="Email" disabled/> 
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.phone} className='w-75' type="text" placeholder="Phone" onChange={(e)=>setEditProfile({...editProfile,phone:e.target.value})}/> 

                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.address} className='w-75' type="text" placeholder="Address" onChange={(e)=>setEditProfile({...editProfile,address:e.target.value})}/> 
                  <Button  style={{margin:'20px'}} variant="primary" onClick={(e)=>updateProfile(e)} >submit</Button>

                </>)


             }
             



      
      </div>
     </div>
  )
}

export default Profile


