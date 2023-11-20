import React from 'react'
import Navbar from '@/Components/Navbar/navbar'
import Footer from '@/Components/Footer/footer'
import PropertyDetails from '@/Components/PropertyComp/[category]/page'

const PropertiesDetails = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <PropertyDetails />
      <Footer />
    </div>
  )
}

export default PropertiesDetails