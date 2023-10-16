import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/navbar'
import Header from '../Components/Header/pages'
import SectionOne from '../Components/SectionOne/page'
import Footer from '@/Components/Footer/footer'
import Socials from '../Components/Socials/page'
import Contact from '../Components/Contact/page'
import SectionTwo from '../Components/SectionTwo/page'
import SectionThree from '../Components/SectionThree/page'
import Testimonies from '../Components/Testimonies/page'
import AboutUs from '../Components/AboutUs/page'
import Services from '../Components/Services/page'
import Career from '../Components/Career/page'



export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <SectionOne />
      <div className='bg-maroon text-white'>
      <SectionTwo />
      </div>
     
      <Services />
      <SectionThree />
      < Testimonies  />
     
      <Career />
      <AboutUs />
      <Contact />
     
      
      
      <Footer />
      <hr  className='text-maroon'/>
      <Socials />
      
     
    </main>
  )
}
