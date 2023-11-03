import React from 'react'
import Navbar from '@/Components/Navbar/navbar'
import PropertySectionOne from '../Components/PropetySectionOne/page'
import Propertytwo from '../Components/Propertytwo/page'
import Footer from '@/Components/Footer/footer'
import Numb from '../Components/Numb/page'
import ProperPurchaseOne from '../Components/ProperPurchaseOne/page'

const LokogomaProp = () => {
  return (
    <div> 
      <Navbar />
      <PropertySectionOne />
     <Propertytwo />
      <ProperPurchaseOne  />
      <Numb />
   <Footer />
    </div>
  )
}

export default LokogomaProp