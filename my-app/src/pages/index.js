import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/navbar'
import Header from '../Components/Header/pages'
import SectionOne from '../Components/SectionOne/page'
import Footer from '@/Components/Footer/footer'
import Socials from '../Components/Socials/page'
import Contact from '../Components/Contact/page'



export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      {/* <SectionOne /> */}
      <Contact />
      <Footer />
      <hr  className='text-maroon'/>
      <Socials />
      
     
    </main>
  )
}
