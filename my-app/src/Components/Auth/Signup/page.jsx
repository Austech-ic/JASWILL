import React from 'react'
import Navbar from '@/Components/Navbar/navbar'
import Header from '@/Components/Header/pages'
import Footer from '@/Components/Footer/footer'
import Login from '@/Components/Login/login'
import SignUp from '@/Components/SignUp/signup'

const page = () => {
  return (
    <div>
      {/* <Header />
      <Navbar /> */}
      <SignUp />
      {/* <Footer /> */}
    </div>
  )
}

export default page