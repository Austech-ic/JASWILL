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
import { getRequest } from '@/library/request'



const Page = () => {
  const [property, setProperty] = useState([]);

    // const defaultDetails = [
    //     {
    //         id: 1,
    //         pic: one,
    //         backgroundImgClass: 'one',
    //         price: "$ 623",
    //         label: "Apartment",
    //         caption: "3 Bedroom Penthouse & BQ",
    //         icon: <BsDot />,
    //         type: "QM of land space per unit",
    //         icontwo: <BsDot />,
    //         typetwo: "Boys Quarter",
    //         iconthree: <BsDot />,
    //         typethree: "Front and external security doors and all rooms",
    //     },
    //     {
    //         id: 2,
    //         pic: two,
    //         backgroundImgClass: 'two',
    //         price: "$ 623",
    //         label: "Office",
    //         caption: "3 Bedroom Penthouse & BQ",
    //         icon: <BsDot />,
    //         type: "QM of land space per unit",
    //         icontwo: <BsDot />,
    //         typetwo: "Boys Quarter",
    //         iconthree: <BsDot />,
    //         typethree: "Front and external security doors and all rooms",
    //     },
    //     {
    //         id: 3,
    //         pic: four,
    //         backgroundImgClass: 'three',
    //         price: "$ 623",
    //         label: "Classic Home",
    //         caption: "3 Bedroom Penthouse & BQ",
    //         icon: <BsDot />,
    //         type: "QM of land space per unit",
    //         icontwo: <BsDot />,
    //         typetwo: "Boys Quarter",
    //         iconthree: <BsDot />,
    //         typethree: "Front and external security doors and all rooms",
    //     },
    //     {
    //         id: 4,
    //         pic: four,
    //         backgroundImgClass: 'four',
    //         price: "$ 623",
    //         label: "Work Space",
    //         caption: "3 Bedroom Penthouse & BQ",
    //         icon: <BsDot />,
    //         type: "QM of land space per unit",
    //         icontwo: <BsDot />,
    //         typetwo: "Boys Quarter",
    //         iconthree: <BsDot />,
    //         typethree: "Front and external security doors and all rooms",
    //     },
    //     {
    //         id: 5,
    //         pic: one,
    //         backgroundImgClass: 'one',
    //         price: "$ 623",
    //         label: "Gym",
    //         caption: "3 Bedroom Penthouse & BQ",
    //         icon: <BsDot />,
    //         type: "QM of land space per unit",
    //         icontwo: <BsDot />,
    //         typetwo: "Boys Quarter",
    //         iconthree: <BsDot />,
    //         typethree: "Front and external security doors and all rooms",
    //     },

    // ]

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Display 3 cards at a time
      slidesToScroll: 1,
    };
    

    const [offset, setOffset] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 820) {
        setVisibleCards(2);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth <= 1500) {
        setVisibleCards(3); // Display 3 cards on larger screens
      }
    };
    

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    getRequest("RealEstate/GetAllRealEstatesAsync").then((data) => setProperty(data.data.data.slice(0, 7))).catch((err) => console.log(err))
  }, [])
  console.log(property)


  const handleSlide = (direction) => {
    const newOffset = offset + (direction === 'left' ? -1 : 1);
  
    // Ensure the offset stays within bounds
    if (newOffset >= 0 && newOffset <= property.length - visibleCards) {
      setOffset(newOffset);
    }
  };
  

    return (
      <div className={styles.main} data-aos="flip-right">
      <div className={styles.submain}>
        <p className={styles.label}>Display Latest & Featured Properties</p>
        <p className={styles.textwo}>
          Get started by choosing from one of our pre-built page templates to showcase your properties
        </p>
      </div>
      <div className={styles.carouselcont}>
        <div onClick={() => handleSlide('left')}>
          <BsArrowLeft />
        </div>
        <div className={styles.cont}>
          {property.slice(offset, offset + visibleCards).map((datum, index) => (
            <div
              key={index}
              className={`${styles.subcont} ${styles[datum.backgroundImgClass]}`}
              style={{ backgroundImage: `url(${datum.imageUrl})` }}
            >
              <p className={styles.bold}>{datum.title}</p>
              <p className={styles.caption}>{datum.type}</p>
              <p className={styles.caption}>{datum.description}</p>
              <div className={styles.sub}>
                <div className={styles.iconcont}>
                  <p>{datum.icon}</p>
                  <p>{datum.price}</p>
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
          {/* Empty cards for the remaining space if there are less than 3 images */}
          {property.length < 3 &&
            Array.from({ length: 3 - property.length }).map((_, index) => (
              <div key={property.length + index} className={styles.emptyCard}>
                {/* Add your empty card styling/content here */}
              </div>
            ))}
        </div>
        <div onClick={() => handleSlide('right')}>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};


export default Page