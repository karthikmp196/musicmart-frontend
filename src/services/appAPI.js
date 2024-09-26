import { baseurl } from "./Baseurl"
import { commonApi } from "./commonApi"

export const registerAPI= async(user)=>{
    return await commonApi("POST",`${baseurl}/user/register`,user,"")
}

export const loginAPI= async(user)=>{
    return await commonApi("POST",`${baseurl}/user/login`,user,"")
}

export const productAPI = async(product,reqHeader)=>{
    return await commonApi("POST",`${baseurl}/admin/addproduct`,product,reqHeader,)
}


export const getProduct = async()=>{
    return await commonApi("GET",`${baseurl}/admin/showproduct`,"","")
}


export const editProducts = async(id,product,reqHeader)=>{
    return await commonApi("PUT",`${baseurl}/admin/editProduct/${id}`,product,reqHeader)
}


export const deleteProduct = async(id,reqHeader)=>{
    return await commonApi("DELETE",`${baseurl}/admin/deleteProduct/${id}`,{},reqHeader)
}

export const addToCartAPI = async(uid,product,reqHeader)=>{
    return await commonApi("POST",`${baseurl}/user/addToCart/${uid}`,product,reqHeader)
}


export const getFromCart = async(uid,reqHeader)=>{
    return await commonApi("GET",`${baseurl}/user/getFromCart/${uid}`,"",reqHeader)
}

export const removeFromCart = async(uid,pid,reqHeader)=>{
    return await commonApi("POST",`${baseurl}/user/removeFromCart/${uid}`,{pid},reqHeader)
}


export const googleRegister = async(user)=>{
    return await commonApi("POST",`${baseurl}/user/googleRegister`,user,"")
}

export const order= async(uid,reqBody,reqHeader)=>{
    return await commonApi("POST",`${baseurl}/user/order/${uid}`,reqBody,reqHeader)
}

export const orderDetails= async()=>{
    return await commonApi("GET",`${baseurl}/admin/showorder`,"","")
}

export const UserorderDetails= async(uid)=>{
    return await commonApi("GET",`${baseurl}/user/showorder/${uid}`,"","")
}


export const deleteProductAPI = async(id,reqHeader)=>{
    return await commonApi("DELETE",`${baseurl}/user/deleteProduct/${id}`,{},reqHeader)
}

export const ForgetPasswordAPI = async(email)=>{
    return await commonApi("POST",`${baseurl}/user/forget-password`,email,"")
}

export const updatePasswordAPI = async(token,password)=>{
    return await commonApi("post",`${baseurl}/user/updatePassword`,{token,password} ,"")
}


export const showUsersAPI = async()=>{
    return await commonApi("GET",`${baseurl}/admin/showUsers`,"","")
}


export const editProfileAPI=async(id,reqHeader)=>{
    return await commonApi("PUT",`${baseurl}/user/editProfile/${id}`,{},reqHeader)
}