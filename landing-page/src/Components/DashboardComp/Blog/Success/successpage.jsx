import React, {useEffect,useState} from 'react';
import styles from './success.module.css'
import Image from 'next/image';
import logo from '../../../../../public/brand/bg.png'
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { getRequest } from '@/library/request'
import { deleteRequest } from '@/library/request'
import { putRequest } from '@/library/request'
import { AiFillDelete } from 'react-icons/ai';
import Button from '@/Components/Button/button';
import axios from "axios"

const Successpage = ({counter}) => {

  const [blog, setBlog] = useState([]);

  const toast = useToast();
  const router = useRouter();
  const { id, title, description, image } = router.query;

  function truncateDescription(description, maxLength) {
    // Check if the description is longer than the maximum length
    if (description.length > maxLength) {
      // Truncate the description and add an ellipsis
      return `${description.substring(0, maxLength)}...`;
    } else {
      // If the description is already shorter, return it as is
      return description;
    }
  }

  function truncateTitle(title, maxLength) {
    // Check if the title is longer than the maximum length
    if (title.length > maxLength) {
      // Truncate the title and add an ellipsis
      return `${title.substring(0, maxLength)}...`;
    } else {
      // If the title is already shorter, return it as is
      return title;
    }
  }
  

  function formatAndTruncateDate(dateString, maxLength) {
    // Parse the ISO-formatted date string into a Date object
    const date = new Date(dateString);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      // If the date is invalid, return the original string
      return dateString;
    }
  
    // Format the date with a custom pattern
    const formattedDate = `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())} ${padNumber(date.getHours())}:${padNumber(date.getMinutes())}:${padNumber(date.getSeconds())}`;
  
    // Check if the formatted date is longer than the maximum length
    if (maxLength && formattedDate.length > maxLength) {
      // Truncate the date and add an ellipsis
      return `${formattedDate.substring(0, maxLength)}...`;
    } else {
      // If the formatted date is shorter or no maxLength is specified, return it as is
      return formattedDate;
    }
  }
  
  // Helper function to pad a number with leading zeros if needed
  function padNumber(num) {
    return num.toString().padStart(2, '0');
  }
  
  

  const handleDelete = async (id) => {
   
      // Delete the item from the server
       putRequest(`Blog/DeleteBlog/${id}`).then((data) => {
        toast({
          title: 'Blog Deleted Successfully',
          description: 'You recently deleted a blog.',
          status: 'success',
          position: 'top',
          duration: 1000,
          isClosable: true,
        });
        setBlog((prevBlog) => prevBlog.filter((item) => item.id !== id));
        console.log(data);
       }).catch((err) => console.log(err));
  
      // Update the state to remove the deleted item from the array
     
  
    
  
  };
  
useEffect(() => {
getRequest("Blog/GetAllBlogsAsync").then((data)=> setBlog(data.data.data)).catch((err)=>console.log(err))
},[counter])
// console.log(blog)

  return (
    
<div className='bg-white px-[30px] py-[50px]'>
  <table className='table-auto w-full'>
    <thead className='h-[10vh] gap-5'>
      <tr className='py-[70px]'>
  
      <th className=' w-3/12 md:w-1/12 text-xs md:text-lg lg:text-sm'> {/* Adjust the width as needed */}
          <p className='text-center'>Id</p>
        </th>
        <th className=' sm:w-4/12 md:w-1/12 text-xs md:text-lg lg:text-sm'> {/* Adjust the width as needed */}
          <p className='text-center'>Image</p>
        </th>
        <th className=' w-2/12 md:w-1/12 text-xs md:text-lg lg:text-sm' > {/* Adjust the width as needed */}
          <p className='text-center'>Name</p>
        </th>
       
        <th className=' w-2/12 md:w-1/12 text-xs md:text-lg lg:text-sm' > {/* Adjust the width as needed */}
          <p className='text-center'>Date</p>
        </th>
       
        <th className=' w-3/12 md:w-1/12  text-xs md:text-lg lg:text-sm'> {/* Adjust the width as needed */}
          <p className='text-center'>Desc</p>
        </th>
        <th className=' w-3/12 md:w-1/12  text-xs md:text-lg lg:text-sm'> {/* Adjust the width as needed */}
          <p className='text-center'>Author</p>
        </th>
        <th className=' w-2/12 md:w-1/12 text-xs md:text-lg lg:text-sm'> {/* Adjust the width as needed */}
          <p className='text-center'>Del</p>
        </th>
      </tr>
    </thead>
    <tbody >
    {blog.map((item) => (
  <tr key={item.id} className='h-[10vh] gap-1'>
  <td className='text-center'>
    <p className='text-xs md:text-lg lg:text-sm'>{item.id}</p>
  </td>
  <td className=''>
    <div className=' md:flex h-[1rem] md:h-[3rem] w-[3rem] md:w-[10rem] text-center'>
      {/* Assuming 'logo' is the variable for your image source */}
      <Image src={item.imageUrl} width={100} height={100} alt='pic' className='w-full h-full object-contain md:object-none' />
    </div>
  </td>
  <td className='text-center'>
  <p className='text-xs md:text-lg lg:text-sm'>{truncateTitle(item.title, 5)}</p>
</td>
  <td className='text-center'>
  <p className='text-xs md:text-lg lg:text-sm'>{formatAndTruncateDate(item.createdOn, 5)}</p>
</td>

  <td className='text-center'>
  <p className='text-xs md:text-lg lg:text-sm'>{truncateDescription(item.desccription, 5)}</p>
</td>

  <td className='text-center'>
    <p className='text-xs md:text-lg lg:text-sm'>Admin</p>
  </td>
  <td className='text-center mx-auto'>

{/* Assuming you're using React Icons for the delete icon */}
<button onClick={() => handleDelete((item.id))} >
  <AiFillDelete color='red'
 className='text-center' style={{ display: 'block', margin: 'auto' }} />
 </button>
</td>

</tr>
))}
    
    </tbody>
  </table>
</div>

  );
};

export default Successpage;