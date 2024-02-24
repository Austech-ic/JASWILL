import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from '../../Blog/Success/success.module.css'
import { useRouter } from "next/router";
import { useToast } from '@chakra-ui/react';
import Navbar from '@/Components/Navbar/navbar'
import DashboardHeader from '../../dashboardheader/dashboardheader'
import Footer from '@/Components/Footer/footer'
import { getRequest } from '@/library/request'
import { deleteRequest } from '@/library/request'
import { AiFillDelete } from 'react-icons/ai';
import Image from 'next/image';
import { MdArrowBackIosNew } from "react-icons/md";


const Page = ({ counter }) => {
  const [property, setProperty] = useState([]);

  const toast = useToast();
  const router = useRouter();
  const { id, title, description, image } = router.query;



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
    deleteRequest(`RealEstate/DeleteRealEstate?Id=${id}`).then((data) => {
      toast({
        title: 'Property Deleted Successfully',
        description: 'You recently deleted a property.',
        status: 'success',
        position: 'top',
        duration: 1000,
        isClosable: true,
      });
      setProperty((prevProperty) => prevProperty.filter((item) => item.id !== id));
      console.log(data);
    }).catch((err) => console.log(err));

    // Update the state to remove the deleted item from the array




  };

  useEffect(() => {
    getRequest("Category/GetAllCategory").then((data) => setProperty(data.data.data)).catch((err) => console.log(err))
  }, [counter])
  console.log(property)



  return (
    <div className='text-sm bg-slate-100'>
      {/* <DashboardHeader /> */}
      {/* <Navbar /> */}

      {/* <div className='flex flex-col items-center justify-center p-10 gap-5'>
 
   <Link href={`/admin/dashboard`} className='hover:text-maroon'>
   <div className='flex items-center justify-center gap-3 '>
   <MdArrowBackIosNew /> 
   <p className='text-xs md:text-xl lg:text-sm'>Back to Dashboard.</p>
   </div>
   </Link>
   <div>
   <p className='text-xs md:text-xl lg:text-sm '>Click on <Link href={`/Property/property`} className=' hover:text-maroon underline-offset-8'>Properties</Link> to check properties newly added.</p>
   </div>
    
   
    </div> */}
      <div className='bg-white px-[30px] py-[50px]'>
        <table className='table-auto w-full' style={{ tableLayout: 'fixed' }}>
          <thead className='h-[10vh] gap-5 '>
            <tr className='py-[70px]'>

              <th className='w-[25%]text-xs md:text-lg lg:text-sm'>
                <p className='text-center'> Cat Id</p>
              </th>
              <th className='w-[25%]  text-xs md:text-lg lg:text-sm'>
                <p className='text-center'>Name</p>
              </th>
              <th className='w-[25%] text-xs md:text-lg lg:text-sm'>
                <p className='text-center'>Author</p>
              </th>
              <th className='w-[25%] text-xs md:text-lg lg:text-sm'>
                <p className='text-center'>Del</p>
              </th>

            </tr>
          </thead>
          <tbody >
            {property.map((item) => (
              <tr key={item.id} className='h-[10vh] gap-1'>
                <td className='text-center'>
                  <p className='text-xs md:text-lg lg:text-sm'>{item.id}</p>
                </td>
               
                <td className='text-center text-xs md:text-lg lg:text-sm'>
                  <p className='text-xs md:text-lg lg:text-sm'>{truncateTitle(item.categoryName, 5)}</p>
                </td>


                <td className='text-center text-xs md:text-sm'>
                  <p className='text-xs md:text-lg lg:text-sm'>Admin</p>
                </td>


                <td className='text-center mx-auto'>

                  {/* Assuming you're using React Icons for the delete icon */}
                  <button onClick={() => handleDelete((item.id))} >
                    <AiFillDelete color='red'
                      className='text-center w-[100%]' style={{ display: 'block', margin: 'auto' }} />
                  </button>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Page