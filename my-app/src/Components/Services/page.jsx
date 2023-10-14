
import styles from './page.module.css'
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const page = () => {
    
    const details =[
        {
            id:1,
            label:"Property Sale",
            text:"If you want to buy land or a house in the FCT, go no further than Jaswill Properties. Our team's professionals work to match you with a home that suits your needs."
        },
        {
            id:2,
            label:"Estate Management",
            text:"We assess, market, and manage estate lots, commercial lots, home buildings, and merchant buildings."
        },
        {
            id:3,
            label:"Estate Development",
            text:"Our business encompasses different stages of the real estate development matrix, but focuses more on land development, building development, and building operations."
        },
        {
            id:4,
            label:"Architecture/Interior Design",
            text:"We pay attention to the design of a building and also the planning and finishing of its interior spaces.."
        },
        {
            id:5,
            label:"Construction",
            text:"For the estates we manage, our engineering team creates, plans, and builds in accordance with government-approved prototypes."
        },
        {
            id:6,
            label:"Facility Management",
            text:"Our support services include the planning, organizing, and maintaining of estate facilities to a predefined standard over a prolonged duration."
        },
    ]
  return (
    <div className={styles.main} data-aos="flip-right">
        <div>
            <p className={styles.head}>SERVICES</p>
           <div className={styles.cont}>
           <Carousel showStatus={false} showThumbs={false} emulateTouch={true} showIndicators={true} interval={7000} className={styles.carousel}>
            {
                details.map((datum) => (
                    <div key={datum.id} className={styles.subcont}>
                        <p className={styles.label}>{datum.label}</p>
                        <p className={styles.text}>{datum.text}</p>
                        </div>
                ))
            }
            </Carousel>
           </div>
           
        </div>
    </div>
  )
}

export default page