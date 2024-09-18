import axios from "axios"

export const commonApi = async (httpMethod,url,reqBody,reqHeader)=>{
    const reqConfig ={
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-type":"application/json"}
    }
return await axios(reqConfig).then((response)=>{
    return response
}).catch((err)=>{
    return err
})
}