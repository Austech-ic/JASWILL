import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);



export const resetPassword = async (url,payload) => {
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    console.error('Error initiating password reset:', error);
    throw new Error('Failed to initiate password reset.');
  }
};


export const forgetPassword = async (url,payload) => {
    
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    console.error('Error initiating password reset:', error);
    throw new Error('Failed to initiate password reset.');
  }
};


export const sendActivationCode = async (endpoint, data) => {
  try {
    // Make an API request to send activation code
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Assuming the response is in JSON format
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending activation code:', error);
    throw new Error('Failed to send activation code.');
  }
};


export const createBlogPost = async (url,payload) => {
    
    const response = await axios.post(url,payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }} )
    return response.data

    // console.log(process.env.NEXT_PUBLIC_BASE_URL)
}
export const signUp = async (url,payload) => {
    
  const response = await axios.post(url,payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }} )
  return response.data

  console.log(process.env.NEXT_PUBLIC_BASE_URL)
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
  



