import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image } from 'react-bootstrap'


function Profile({users1}) {
const [userName,setUserName] = useState()
const[token,setToken] = useState()
const[email,setEmail] = useState()
const[profile,setProfile]= useState()
const[preview,setPreview] = useState(null)

useEffect(()=>{
  const data = sessionStorage.getItem('token')
  setToken(data)

const userData=JSON.parse(sessionStorage.getItem('data'))
setUserName(userData?.fname)
setProfile(userData?.profileimg)
setEmail(userData?.email)
// console.log(userData);


},[])

const[editProfile,setEditProfile] = useState({
  // id:users1?._id,
  fname:users1?.fname,
  lname:users1?.lname,
   profileimg:users1?.profileimg,
  address:users1?.address

})   


useEffect(()=>{
  if(editProfile.profileimg){
    setPreview(URL.createObjectURL(editProfile.profileimg))
  }
},[editProfile.profileimg])


const updateProfile=async(e)=>{
  e.preventDefault()
  const{id,fname,lname,address,profileimg} = editProfile
if(!id||!fname||!lname||!address||!profileimg){
  alert("please enter the form")
}
else{
  const reqBody = new FormData()
  reqBody.append("id",id)

  reqBody.append("fname",users1.fname)
  reqBody.append("lname",users1.lname)
  preview? reqBody.append("profileimg",profileimg): reqBody.append("profileimg",users1.profileimg)
  reqBody.append("address",users1.address)

 if(token){
  var reqHeader = {
    "Content-Type": "multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
 }

 const result = await editProfile(id,reqBody,reqHeader)
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
console.log(editProfile);


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
                  <Button  style={{margin:'20px'}} variant="primary" >submit</Button>

              </>)
                : 
                (<>
                  <Image style={{marginTop:'10px',width:'30%'}} src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"  roundedCircle />
                  
                  <Form.Control style={{marginTop:'20px'}}  value={editProfile?.fname}   className='w-75' type="text" placeholder="Username" onChange={(e)=>setEditProfile({...editProfile,fname:e.target.value})} /> 
                  <Form.Control style={{marginTop:'20px'}}  value={editProfile?.lname}   className='w-75' type="text" placeholder="Username" onChange={(e)=>setEditProfile({...editProfile,lname:e.target.value})} /> 

                  <Form.Control style={{marginTop:'20px'}}  className='w-75' type="text" placeholder="Email" disabled/> 
                  <Form.Control style={{marginTop:'20px'}} value={editProfile?.address} className='w-75' type="text" placeholder="Address" onChange={(e)=>setEditProfile({...editProfile,address:e.target.value})}/> 
                  <Button  style={{margin:'20px'}} variant="primary" >submit</Button>

                </>)


             }
             



      
      </div>
     </div>
  )
}

export default Profile
