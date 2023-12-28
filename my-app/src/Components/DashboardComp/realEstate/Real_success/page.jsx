import React from 'react'
import Link from 'next/link'
import Navbar from '@/Components/Navbar/navbar'

const page = () => {
  return (
   <div>
    <Navbar />
    <div className='flex items-center justify-center'>
 
    <p className='bg-red-300 text-xl'>Click on Properties to check properties newly added Properties</p>
   
    </div>
   </div>
  )
}

export default page