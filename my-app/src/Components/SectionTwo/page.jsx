'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css'
import one from '../../../public/one.webp'
import two from '../../../public/two.webp'
import three from '../../../public/officetwo.webp'
import four from '../../../public/blog.png'
import Image from 'next/image'
import { FaBed, FaShower } from 'react-icons/fa'
import { FcDebian } from 'react-icons/fc'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeft, BsArrowRight, BsDot } from 'react-icons/bs';
import Test from '../SectionTwo/Test/page'

const Page = () => {
  const defaultDetails = [
    {
        id: 1,
        pic: one,
        backgroundImgClass: 'one',
        price: "$ 623",
        label: "Apartment",
        caption: "3 Bedroom Penthouse & BQ",
        icon: <BsDot />,
        type: "QM of land space per unit",
        icontwo: <BsDot />,
        typetwo: "Boys Quarter",
        iconthree: <BsDot />,
        typethree: "Front and external security doors and all rooms",
    },
    {
        id: 2,
        pic: two,
        backgroundImgClass: 'two',
        price: "$ 623",
        label: "Office",
        caption: "3 Bedroom Penthouse & BQ",
        icon: <BsDot />,
        type: "QM of land space per unit",
        icontwo: <BsDot />,
        typetwo: "Boys Quarter",
        iconthree: <BsDot />,
        typethree: "Front and external security doors and all rooms",
    },
    {
        id: 3,
        pic: four,
        backgroundImgClass: 'three',
        price: "$ 623",
        label: "Classic Home",
        caption: "3 Bedroom Penthouse & BQ",
        icon: <BsDot />,
        type: "QM of land space per unit",
        icontwo: <BsDot />,
        typetwo: "Boys Quarter",
        iconthree: <BsDot />,
        typethree: "Front and external security doors and all rooms",
    },
    {
        id: 4,
        pic: four,
        backgroundImgClass: 'four',
        price: "$ 623",
        label: "Work Space",
        caption: "3 Bedroom Penthouse & BQ",
        icon: <BsDot />,
        type: "QM of land space per unit",
        icontwo: <BsDot />,
        typetwo: "Boys Quarter",
        iconthree: <BsDot />,
        typethree: "Front and external security doors and all rooms",
    },
    {
        id: 5,
        pic: one,
        backgroundImgClass: 'one',
        price: "$ 623",
        label: "Gym",
        caption: "3 Bedroom Penthouse & BQ",
        icon: <BsDot />,
        type: "QM of land space per unit",
        icontwo: <BsDot />,
        typetwo: "Boys Quarter",
        iconthree: <BsDot />,
        typethree: "Front and external security doors and all rooms",
    },
    {
      id: 6,
      pic: four,
      backgroundImgClass: 'three',
      price: "$ 623",
      label: "Pent Home",
      caption: "3 Bedroom Penthouse & BQ",
      icon: <BsDot />,
      type: "QM of land space per unit",
      icontwo: <BsDot />,
      typetwo: "Boys Quarter",
      iconthree: <BsDot />,
      typethree: "Front and external security doors and all rooms",
  },
  {
      id: 7,
      pic: four,
      backgroundImgClass: 'four',
      price: "$ 623",
      label: "Gym",
      caption: "3 Bedroom Penthouse & BQ",
      icon: <BsDot />,
      type: "QM of land space per unit",
      icontwo: <BsDot />,
      typetwo: "Boys Quarter",
      iconthree: <BsDot />,
      typethree: "Front and external security doors and all rooms",
  },
  {
      id: 8,
      pic: one,
      backgroundImgClass: 'one',
      price: "$ 623",
      label: "Office",
      caption: "3 Bedroom Penthouse & BQ",
      icon: <BsDot />,
      type: "QM of land space per unit",
      icontwo: <BsDot />,
      typetwo: "Boys Quarter",
      iconthree: <BsDot />,
      typethree: "Front and external security doors and all rooms",
  },

]

  const [offset, setOffset] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const totalCards = defaultDetails.length;

   

    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1, // Show one card at a time
    //   slidesToScroll: 1,
    // };

  
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 760) {
          setVisibleCards(1);
          clearInterval(autoSlideInterval); // Clear the previous interval
          setAutoSlideInterval(2000); // Set a different interval for mobile
        } else if (window.innerWidth <= 820) {
          setVisibleCards(2);
          clearInterval(autoSlideInterval); // Clear the previous interval
          setAutoSlideInterval(12000); // Set a different interval for tablets
        } else if (window.innerWidth <= 1024) {
          setVisibleCards(2);
          clearInterval(autoSlideInterval); // Clear the previous interval
          setAutoSlideInterval(8000); // Set a different interval for larger tablets
        } else if (window.innerWidth <= 1500) {
          setVisibleCards(3);
          clearInterval(autoSlideInterval); // Clear the previous interval
          setAutoSlideInterval(8000); // Set a different interval for desktop
        }
      };

    
      let autoSlideInterval;

      const setAutoSlideInterval = (interval) => {
        autoSlideInterval = setInterval(() => {
          const newOffset = offset + 1;
          if (newOffset < totalCards - visibleCards) {
            setOffset(newOffset);
          } else {
            setOffset(0);
          }
        }, interval);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      setAutoSlideInterval(1500); // Initial interval, adjust as needed
  
      return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(autoSlideInterval); // Clear the interval when the component is unmounted
      };
    }, [offset, totalCards, visibleCards]);
  

    return (
        <div className={styles.main} data-aos="flip-right">

            <div className={styles.submain}>
                <p className={styles.label}>Display Latest & Featured Properties</p>
                <p className={styles.textwo}>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            </div>

            
            <div className={styles.carouselcont}>
            {/* <div onClick={() => handleSlide('left')}>
          <BsArrowLeft />
        </div> */}
        <div className={styles.cont}>
          {defaultDetails.slice(offset, offset + visibleCards).map((datum) => (
            <div key={datum.id} className={`${styles.subcont} ${styles[datum.backgroundImgClass]}`}>
            
            <p className={styles.bold}>{datum.label}</p>
            <p className={styles.caption}>{datum.caption}</p>
            <div className={styles.sub}>
                <div className={styles.iconcont}>
                    <p>{datum.icon}</p>
                    <p>{datum.type}</p>
                </div>
                <div className={styles.iconcont}>
                    <p>{datum.icontwo}</p>
                    <p>{datum.typetwo}</p>
                </div>

                <div className={styles.iconcont}>
                    <p>{datum.iconthree}</p>
                    <p>{datum.typethree}</p>
                  

                </div>
            </div>

        </div>
          ))}
        </div>
                {/* <div onClick={() => handleSlide('right')}>
                    <BsArrowRight />
                </div> */}

            </div>

           


        </div>
    )
}

export default Page