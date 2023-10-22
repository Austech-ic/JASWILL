'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css'
import one from '../../../public/one.webp'
import two from '../../../public/two.webp'
import three from '../../../public/three.webp'
import four from '../../../public/four.webp'
import Image from 'next/image'
import { FaBed, FaShower } from 'react-icons/fa'
import { FcDebian } from 'react-icons/fc'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowLeft, BsArrowRight, BsDot } from 'react-icons/bs';

const Page = () => {
   

    const defaultDetails = [
        {
            id: 1,
            pic: one,
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
            pic: four,
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

    ]

    const [offset, setOffset] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 760) {
          setVisibleCards(1); // Mobile view, show one card
        } else if (window.innerWidth <= 820) {
          setVisibleCards(2); // Desktop view (768 to 1000), show two cards
        }  else if (window.innerWidth <= 1500) {
            setVisibleCards(3); // Desktop view (768 to 1000), show two cards
           
        }
      
      
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleSlide = (direction) => {
    const newOffset = offset + (direction === 'left' ? -1 : 1);
    
    // Ensure the offset stays within bounds
    if (newOffset >= 0 && newOffset <= defaultDetails.length - visibleCards) {
      setOffset(newOffset);
    }
  };

    return (
        <div className={styles.main}>

            <div className={styles.submain}>
                <p className={styles.label}>Display Latest & Featured Properties</p>
                <p className={styles.textwo}>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            </div>
            <div className={styles.carouselcont}>
            <div onClick={() => handleSlide('left')}>
          <BsArrowLeft />
        </div>
        <div className={styles.cont}>
          {defaultDetails.slice(offset, offset + visibleCards).map((datum) => (
            <div key={datum.id} className={styles.subcont}>
            <Image src={datum.pic} alt='pic-img' className={styles.img} />
            <p className={styles.price}>{datum.price}</p>
            <p className={styles.bold}>{datum.label}</p>
            <p className={styles.caption}>{datum.caption}</p>
            <hr />
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
                <div onClick={() => handleSlide('right')}>
                    <BsArrowRight />
                </div>

            </div>


        </div>
    )
}

export default Page