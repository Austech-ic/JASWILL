import axios from "axios";

axios.defaults.baseURL = "https://jaswillrealestate.onrender.com/api/"




export const createBlogPost = async (url,payload) => {
    
    const response = await axios.post(url,payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }} )
    return response.data

    // console.log(process.env.NEXT_PUBLIC_BASE_URL)
}


export const getRequest = async(url)=>{
return await axios.get(url)
}

export const postRequest = async (url, payload)=>{
    return await axios.post(url, payload).data
}

export const deleteRequest = async(url)=>{
    return await axios.delete(url)
    }

    export const putRequest = async(url)=>{
        return await axios.put(url)
        }

    export const createRealEstate = async (url,payload) => {
        const response = await axios.post(url,payload, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }} )
        return response.data
    }
  



