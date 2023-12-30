import React, { useState,useEffect } from 'react';
import Link from 'next/link'
import styles from '../../Blog/Success/success.module.css'
import {useRouter} from "next/router";
import Navbar from '@/Components/Navbar/navbar'
import DashboardHeader from '../../dashboardheader/dashboardheader'
import Footer from '@/Components/Footer/footer'
import { getRequest } from '@/library/request'
import { deleteRequest } from '@/library/request'
import { AiFillDelete } from 'react-icons/ai';
import Image from 'next/image';


const page = ({counter}) => {
  const [property, setProperty] = useState([]);

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
       deleteRequest(`RealEstate/DeleteRealEstate/${id}`).then((data) => {
        setProperty((prevProperty) => prevProperty.filter((item) => item.id !== id));
        console.log(data);
       }).catch((err) => console.log(err));
  console.log(property)
      // Update the state to remove the deleted item from the array
     
  
    
  
  };
  
useEffect(() => {
getRequest("RealEstate/GetAllRealEstatesAsync").then((data)=> setProperty(data.data.data)).catch((err)=>console.log(err))
},[counter])
// console.log(blog)
  return (
   <div className='text-sm bg-slate-100'>
    {/* <DashboardHeader /> */}
    <Navbar />
    
    <div className='flex items-center justify-center p-10'>
 
    <p className='text-xl '>Click on Properties to check properties newly added.</p>
   
    </div>
    <div className='bg-white px-[30px] py-[50px]'>
  <table className='table-auto w-full'>
    <thead className='h-[10vh] '>
      <tr className='py-[70px]'>
  
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Id</p>
        </th>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Image</p>
        </th>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Name</p>
        </th>
       
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Desc</p>
        </th>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Author</p>
        </th>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Operation</p>
        </th>
      </tr>
    </thead>
    <tbody >
    {property.map((item) => (
  <tr key={item.id} className='h-[10vh]'>
  <td className='text-center'>
    <p>{item.id}</p>
  </td>
  <td className='text-center'>
    <div className='h-[3rem] w-[10rem]'>
      {/* Assuming 'logo' is the variable for your image source */}
      <Image src={item.imageUrl} width={100} height={100} alt='pic' className='w-full h-full object-cover' />
    </div>
  </td>
  <td className='text-center'>
  <p>{truncateTitle(item.title, 5)}</p>
</td>

  <td className='text-center'>
  <p>{truncateTitle(item.description, 5)}</p>
</td>

  <td className='text-center'>
    <p>Admin</p>
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
    <Footer />
   </div>
  )
}

export default page