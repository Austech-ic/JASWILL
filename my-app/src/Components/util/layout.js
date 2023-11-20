import React from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'

const LayoutContainer = ({children}) => {
  return (
    <>

    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default LayoutContainer