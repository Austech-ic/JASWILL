import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react';
import styles from './pages.module.css'
import contact from '../../../public/contact-us.webp'
import { IoIosMenu,IoMdCall } from 'react-icons/io';
import {FaWhatsappSquare} from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapLocation } from 'react-icons/fa6';
import { FaWhatsapp } from "react-icons/fa6";


const Page = () => {

    const [address] = useState("2nd Floor, Iya Magira Plaza, opposite Utako Ultramodern Market, Utako-Abuja");

    const handleAddressClick = () => {
        const encodedAddress = encodeURIComponent(address);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        window.open(googleMapsUrl, '_blank');
    };


  const scrollTriggerRef = useRef(null);

  useEffect(() => {
      AOS.init();
      const options = {
          threshold: 0.2,
      };
      const observer = new IntersectionObserver(handleScroll, options);
      observer.observe(scrollTriggerRef.current);

      return () => {
          observer.disconnect();
      };
  }, []);

  const handleScroll = (entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              AOS.refresh();
          }
      });
  };
  return (
    <div className={styles.main}
   
    data-aos='flip-left'
    data-aos-easing='ease-out-cubic'
data-aos-duration='2000'
ref={scrollTriggerRef}
    >
        <div className='flex flex-col gap-x-8 xl:gap-2 lg:flex-row' id='contact'>
            <div className={styles.subone}>
                <Image src={contact} alt='contact-img' className={styles.img} />
            </div>
            <div className='flex flex-col gap-4 lg:gap-4 xl:gap-8'>
                <p className='text-maroon text-xl md:text-4xl pt-8 md:pt-16 lg:text-3xl lg:pt-10'>Contact Us</p> 
                <p className='text-sm md:text-3xl lg:text-xl md:py-5 lg:p-0'>Do you have questions or in need of further clarification? Call or send a direct message to us.</p>
                
               <div className='flex gap-4 items-center'>
            <FaLocationDot className='text-maroon w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[20px] lg:h-[20px]' />
          
                <div onClick={handleAddressClick} className='hover:text-maroon hover:underline cursor-pointer'>
                    <p className='text-xs md:text-2xl lg:text-sm'>{address}</p>
                </div>
         
        </div>
                
                <div className='flex items-center gap-x-2'> 
                <IoMdCall className='text-maroon w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[20px] lg:h-[20px]' />

                <div className='flex items-center gap-x-2' >
                <Link href="tel:+2347012488242">
                <div  className='hover:text-maroon hover:underline'>
                <p className='text-xs md:text-2xl lg:text-sm'>+234 7012 488 242</p>
                </div>
                </Link>
                <p>,</p>

                <Link href="tel:+2348025706191">
                <div className=' hover:text-maroon hover:underline'>
                <p className='text-xs md:text-2xl lg:text-sm'>+234 8025 706 191</p>
                </div>
                </Link>
                </div>
               
                </div>
                <div className='flex gap-4 items-center'>
                <FaWhatsapp className='text-maroon w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[20px] lg:h-[20px]' />
                <Link href="https://wa.me/message/R3XZ3HBLHXWMG1" className={styles.link}>
                <div onClick={handleAddressClick} className='hover:text-maroon hover:underline cursor-pointer'>
                    <p className='text-xs md:text-2xl lg:text-sm'>Send us a message on whatsapp</p>
                </div>
                </Link>
                
         
        </div>
                
                {/* <div className={styles.mobilecont}>
                <p className={styles.text}>Send a Message:</p>
                <Link href="https://wa.me/message/R3XZ3HBLHXWMG1" className={styles.link}>
                <div className={styles.subcont}>
                <FaWhatsappSquare color='#25D366' />
                
                </div>
                </Link>
                
                </div> */}
                
               
            </div>
        </div>
    </div>
  )
}

export default Page;