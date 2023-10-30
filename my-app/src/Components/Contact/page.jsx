import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react';
import styles from './pages.module.css'
import contact from '../../../public/contact-us.webp'
import { IoIosMenu,IoMdCall } from 'react-icons/io';
import {FaWhatsappSquare} from 'react-icons/fa'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Page = () => {
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
        <div className={styles.cont} id='contact'>
            <div className={styles.subone}>
                <Image src={contact} alt='contact-img' className={styles.img} />
            </div>
            <div className={styles.subtwo}>
                <p className={styles.label}>Contact Us</p>
                <p className={styles.subtext}>Do you have questions or in need of further clarification? Call or send a direct message to us.</p>
                <div className={styles.mobilecont}> 
                <p className={styles.text}>Call Us:</p>
                <Link href="tel:+2347012488242" className={styles.link}>
                <div className={styles.subcont}>
                <IoMdCall />
                <p> +234 7012 488 242</p>
                </div>
                </Link>
               
                </div>
                <div className={styles.mobilecont}>
                <p className={styles.text}>Whatsapp:</p>
                <Link href="https://wa.me/message/J3AEV6SQGELOJ1" className={styles.link}>
                <div className={styles.subcont}>
                <FaWhatsappSquare color='#25D366' />
                <p>Send a direct message</p>
                </div>
                </Link>
                
                </div>
                
               
            </div>
        </div>
    </div>
  )
}

export default Page;