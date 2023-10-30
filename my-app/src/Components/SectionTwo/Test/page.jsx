import React, { useState, useEffect } from 'react';
import one from '../../../../public/one.webp'
import two from '../../../../public/two.webp'
import three from '../../../../public/officetwo.webp'
import four from '../../../../public/blog.png'
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
import styles from '../../SectionTwo/page'

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
    
  
    return (
        <div className={styles.cardSlider}>
               <div className={styles.carouselcont}>
        
        <div className={styles.cont}>
          {defaultDetails.map((datum) => (
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
               

            </div>
           
        </div>
    );
};

export default Page;
