import React from 'react'
import Link from 'next/link'
import Navbar from '@/Components/Navbar/navbar'
import DashboardHeader from '../../dashboardheader/dashboardheader'
import Footer from '@/Components/Footer/footer'

const page = () => {
  return (
   <div className='text-sm bg-slate-100'>
    {/* <DashboardHeader /> */}
    <Navbar />
    
    <div className='flex items-center justify-center h-[70vh]'>
 
    <p className='text-xl '>Click on Properties to check properties newly added.</p>
   
    </div>
    <Footer />
   </div>
  )
}

export default page