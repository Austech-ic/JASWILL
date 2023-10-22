
import styles from './page.module.css'
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import female from '../../../public/side.png'
import Image from 'next/image';
import Review from '../Rev/page'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


const Page = () => {

    const details = [
        {
            id: 1,
            pic: female,
            label: "Miss Joy",
            text: "This app makes house hunting so easy, for me it's so understabdable.",
            rate:[
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },

            ]

        },
        {
            id: 2,
            pic: female,
            label: "Mr Ben",
            text: "This app makes house hunting so easy, for me it's so understabdable.",
            rate:[
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },

            ]

        },
        {
            id: 3,
            pic: female,
            label: "Miss Taiwo",
            text: "Our business encompasses different stages of the real estate development matrix, but focuses more on land development, building development, and building operations.",
            rate:[
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },

            ]

        },
        {
            id: 4,
            pic: female,
            label: "Mrs Johnson",
            text: "This app makes house hunting so easy, for me it's so understabdable.",
            rate:[
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },

            ]
        },
        {
            id: 5,
            pic: female,
            label: "Mr Olu",
            text: "This app makes house hunting so easy, for me it's so understabdable.",
            rate:[
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },

            ]
        },
        {
            id: 6,
            pic: female,
            label: "Mr John",
            text: "This app makes house hunting so easy, for me it's so understabdable.", text: "This app makes house hunting so easy, for me it's so understabdable.",
            rate:[
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },
                {icon: <AiFillStar size={25} className='text-maroon' /> },

            ]
        },
    ]


    return (
        <div className={styles.main}>
            <div>
                <div>
                    <p className={styles.head}>Testimonials</p>
                </div>

                <Carousel
                    showArrows={true} // Display navigation arrows
                    showStatus={false} // Hide status (current slide number)
                    showIndicators={true} // Show dots for navigation
                    useKeyboardArrows={true} // Enable keyboard arrow navigation
                >
                    {details?.map((datum) => (
                        <div key={datum.id} className={styles.subcont}>
                            {/* Your content for each slide */}
                            <div className={styles.picont}>
                                <Image src={datum.pic} alt="pic-img" className={styles.pic} />
                            </div>
                            <div>
                                <p className={styles.label}>{datum.label}</p>
                                <p className={styles.text}>{datum.text}</p>
                            </div>
                            <div className='flex flex-row'>
                                {/* {datum?.rate?.map((item) => (
                                    <span>{item.icon}</span>
                                ))} */}
                                {datum?.rate?.map((item) => (
                                    <p key={item.id}>{item.icon}</p>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Page