import React from 'react'
import Blog from '../Components/Blog/page'
import Navbar from '@/Components/Navbar/navbar'
import Header from '@/Components/Header/pages'
import Footer from '@/Components/Footer/footer'
import Career from '@/Components/Career/page'
import Patner from '../Components/PatnerUs/page'
const carrerpage = () => {
  return (
    <div>
      <Header />
      <Navbar />
     {/* <Career /> */}
     <Patner />
      <Footer />
      
    </div>
  )
}

export default carrerpage