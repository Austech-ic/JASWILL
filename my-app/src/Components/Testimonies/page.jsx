
import styles from './page.module.css'
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import female from '../../../public/side.png'
import Image from 'next/image';
import Review from '../SectionThree/Review'


const page = () => {
    
    const details =[
        {
            id:1,
            pic:female,
            label:"Miss Joy",
            text:"This app makes house hunting so easy, for me it's so understabdable.",
            review:<Review />,
        },
        {
            id:2,
            pic:female,
            label:"Mr Ben",
            text:"This app makes house hunting so easy, for me it's so understabdable.",
            review:<Review />,
        },
        {
            id:3,
            pic:female,
            label:"Miss Taiwo",
            text:"Our business encompasses different stages of the real estate development matrix, but focuses more on land development, building development, and building operations.",
            review:<Review />,
        },
        {
            id:4,
            pic:female,
            label:"Mrs Johnson",
            text:"This app makes house hunting so easy, for me it's so understabdable.",
        },
        {
            id:5,
            pic:female,
            label:"Mr Olu",
            text:"This app makes house hunting so easy, for me it's so understabdable.",
            review:<Review />,
        },
        {
            id:6,
            pic:female,
            label:"Mr John",
            text:"This app makes house hunting so easy, for me it's so understabdable.", text:"This app makes house hunting so easy, for me it's so understabdable.",
            review:<Review />,
        },
    ]
  return (
    <div className={styles.main} >
        <div>
            <p className={styles.head}>Testimonials</p>
           <div className={styles.cont}>
           <Carousel showStatus={false} showThumbs={false} emulateTouch={true} showIndicators={true} interval={7000}  className={styles.carousel}>
            {
                details.map((datum) => (
                    <div key={datum.id} className={styles.subcont}>
                        <div className={styles.picont}>
                        <Image src={datum.pic} alt='pic-img' className={styles.pic} />
                        </div>
                        <p className={styles.label}>{datum.label}</p>
                        <p className={styles.text}>{datum.text}</p>
                        <div>
                        <p >{datum.review}</p>
                        </div>
                       
                       

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