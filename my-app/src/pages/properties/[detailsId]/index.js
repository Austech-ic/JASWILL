import React from 'react'
import Navbar from '@/Components/Navbar/navbar'
import Footer from '@/Components/Footer/footer'
import PropertyDetails from '@/Components/property/[category]/page'

const PropertiesDetails = () => {
  return (
    <div>
      <Navbar />
      <PropertyDetails />
      {/* <p>hello</p> */}
      <Footer />
    </div>
  )
}

export default PropertiesDetails