import React from 'react'
import Navbar from '@/Components/Navbar/navbar'
import Header from '@/Components/Header/pages'
import Footer from '@/Components/Footer/footer'
import SignIn from '@/Components/SignUp/signup'
import Login from '@/Components/Login/login'

const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Login />
      <Footer />
    </div>
  )
}

export default page