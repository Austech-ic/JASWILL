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

// request.js
export const postRequest = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };
  

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
  



