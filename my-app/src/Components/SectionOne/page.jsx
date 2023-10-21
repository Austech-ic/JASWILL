import React, { useEffect, useRef, useState } from 'react';
import styles from './pages.module.css'
import Image from 'next/image'
import house from '../../../public/house.jpeg'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Page = () => {
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
      AOS.init();
      const options = {
          threshold: 0.9,
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
    data-aos='zoom-in'
    data-aos-duration='1000'
    ref={scrollTriggerRef}>
        <div className={styles.submain}>
            <div className={styles.subone}>
                <p className={styles.text}>Unlock the Door <br className={styles.hide}/>to <span className={styles.spancolor}>Your Perfect Home.</span></p>
              
                
                <p className={styles.subtext}>Join us in the pursuit of exceptional living. <br className={styles.starthide} /> Start your <br className={styles.hides} /> property journey today!
                </p>
                <div className={styles.buttoncont}>
                  <Link href={`/signup`}>
                  <button className={styles.button}>Get Started</button>
                  </Link>
                  <Link href={`/career`}>
                    <button className={styles.buttons}>Patner With Us</button>
                  </Link>
                    
                    
                    
                </div>
            </div>
            <div className={styles.subtwo}>
              <Image src={house} alt='house-img' className={styles.img} data-aos="zoom-in-up" data-aos-duration="1000"/>
            </div>

        </div>
    </div>
  )
}

export default Page