import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL



export const createBlogPost = async (payload) => {
    const response = await axios.post("Blog/CreateBlog",payload)
    return response.data
    console.log(process.env.NEXT_PUBLIC_BASE_URL)
}




