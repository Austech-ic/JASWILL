'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css'
import aoc from '../../../public/aoc.jpeg'
import two from '../../../public/ao.jpeg'
import three from '../../../public/aob.jpeg'
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

  const details = [
    {
      id: 1,
      label: "JIKWOYI",
      desc: "For Rent",
      content: "180SQM",
      price: "#9,000,000",
      backgroundImgClass: "one" // Use 'one' class for background image
    },
    {
      id: 2,
      label: "JIKWOYI",
      desc: "For Rent",
      content: "250SQM",
      price: "#1,200,000",
      backgroundImgClass: "two" // Use 'two' class for background image
    },
    {
      id: 3,
      label: "JIKWOYI",
      desc: "For Rent",
      content: "250SQM",
      price: "#1,200,000",
      backgroundImgClass: "three" // Use 'two' class for background image
    },
    {
      id: 4,
      label: "JIKWOYI",
      desc: "For Rent",
      content: "350SQM",
      price: "#1,500,000",
      backgroundImgClass: "four" // Use 'two' class for background image
    },
    {
      id: 5,
      label: "JIKWOYI",
      desc: "For Rent",
      content: "400SQM",
      price: "#1,700,000",
      backgroundImgClass: "five" // Use 'two' class for background image
    },
    {
      id: 6,
      label: "JIKWOYI",
      desc: "For Rent",
      content: "500SQM",
      price: "#2,700,000",
      backgroundImgClass: "six" // Use 'two' class for background image
    },
];


   

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

  if (!property) {
    return <div>Loading...</div>; // Add a loading state while fetching data
  }


  // const handleSlide = (direction) => {
  //   const newOffset = offset + (direction === 'left' ? -1 : 1);
  
  //   // Ensure the offset stays within bounds
  //   if (newOffset >= 0 && newOffset <= property.length - visibleCards) {
  //     setOffset(newOffset);
  //   }
  // };
  const handleSlide = (direction) => {
    const newOffset = offset + (direction === 'left' ? -1 : 1);
  
    // Ensure the offset stays within bounds
    if (newOffset >= 0 && newOffset <= details.length - visibleCards) {
      setOffset(newOffset);
    }
  };
  

    return (
      <div className={styles.main} data-aos="flip-right">
      <div className={styles.submain}>
        <p className={styles.label}>Invest Today In The FCT, Abuja-Nigeria</p>
        <p className={styles.textwo}>
        Choose your preferred plot size and building prototype based on your budget.
        </p>
      </div>
      <div className={styles.carouselcont}>
        <div onClick={() => handleSlide('left')}>
          <BsArrowLeft className={styles.arrow} />
        </div>
        {/* <div className={styles.cont}>
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
                  <p>{datum.price}</p>
                </div>
               
                
              </div>
            </div>
          ))}
          
          {property.length < 3 &&
            Array.from({ length: 3 - property.length }).map((_, index) => (
              <div key={property.length + index} className={styles.emptyCard}>
              </div>
            ))}
        </div> */}

<div className={styles.cont}>
  {details.slice(offset, offset + visibleCards).map((datum, index) => (
    <div
    key={index}
    className={`${styles.subcont} ${styles[datum.backgroundImgClass]}`} // Dynamically apply background image class
    style={{ backgroundImage: `url(${require(`../../../public/${datum.backgroundImgClass}.jpeg`)})` }} // Dynamically set background image URL
  >
      <p className={styles.bold}>{datum.label}</p>
      <p className={styles.caption}>{datum.desc}</p>
      <p className={styles.caption}>{datum.content}</p>
      <div className={styles.sub}>
        <div className={styles.iconcont}>
          <p>{datum.price}</p>
        </div>
      </div>
    </div>
  ))}
  
  {/* {property.length < 3 &&
    Array.from({ length: 3 - property.length }).map((_, index) => (
      <div key={property.length + index} className={styles.emptyCard}></div>
    ))} */}
    {details.length < 3 &&
    Array.from({ length: 3 - details.length }).map((_, index) => (
      <div key={details.length + index} className={styles.emptyCard}></div>
    ))}
</div>



      
        <div onClick={() => handleSlide('right')}>
          <BsArrowRight className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};


export default Page