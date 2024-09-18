import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { baseurl } from '../../services/Baseurl';
import { editProducts } from '../../services/appAPI';

function Adminedit({products}) {
    const [show, setShow] = useState(false);
    const[token,setToken] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const[preview,setPreview] = useState(null)

useEffect(()=>{
  const userToken = sessionStorage.getItem('token')
  setToken(userToken)
},[])
  

const[editProduct,setEditProduct] = useState({
  id:products._id,
  pname:products.pname,
  category:products.category,
   productimage:"",
  description:products.description

})   


useEffect(()=>{
  if(editProduct.productimage){
    setPreview(URL.createObjectURL(editProduct.productimage))
  }
},[editProduct.productimage])

const updateProduct=async(e)=>{
  e.preventDefault()
  const{id,pname,category,productimage,description,} = editProduct
if(!id||!pname||!category||!description){
  alert("please enter the form")
}
else{
  const reqBody = new FormData()
  reqBody.append("pname",pname)
  reqBody.append("pcategory",category)
  reqBody.append("description",description)
  preview? reqBody.append("productimage",productimage): reqBody.append("productimage",products.productimage)
 reqBody.append("category",category)

 if(token){
  var reqHeader = {
    "Content-Type": "multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
 }

 const result = await editProducts(id,reqBody,reqHeader)
 console.log(result);

 if(result.status == 200){
  setEditProduct('')
  alert('product updated successfully')
  
 }
 else{
  alert("incorrect data entry")
 }
 

}
}





  return (
    <div>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3"></InputGroup>
       
         {/* <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Id'
          value={editProduct?.id}
          onChange={(e)=>setEditProduct({...editProduct,id:e.target.value})}
        /> <br />  */}
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Name'
          value={editProduct?.pname}
          onChange={(e)=>setEditProduct({...editProduct,pname:e.target.value})}
        /> <br />
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Category'
          value={editProduct?.category}
          onChange={(e)=>setEditProduct({...editProduct,category:e.target.value})}

        /> <br />
        <label>
          <input type="file" style={{display:'none'}}  onChange={(e)=>setEditProduct({...editProduct,productimage:e.target.files[0]})}/>
          <img src=  {preview?preview:`${baseurl}/uploads/${products.productimage}` } style={{width:'40%',margin:'20px'}}  alt="image"  /> 
          </label>
        <br />
        <Form.Control
        as={'textarea'}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Description'
          value={editProduct?.description}
          onChange={(e)=>setEditProduct({...editProduct,description:e.target.value})}

        />

        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={(e)=>updateProduct(e)}>Done</Button>
        </Modal.Footer>
      </Modal>
      <Button style={{marginRight:'20px'}} variant="primary" onClick={handleShow}><i class="fa-solid fa-pen-to-square"></i></Button>
    </div>
  )
}

export default Adminedit
