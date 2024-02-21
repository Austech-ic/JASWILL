
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
import gben from '../../../public/gben2.jpeg'
import zain from '../../../public/zain.jpeg'
import pat from '../../../public/pat2.jpeg'
import tony from '../../../public/to.jpeg'
import uc from '../../../public/uc.jpeg'


const Page = () => {

    const details = [
        {
            id: 1,
            pic: gben,
            label: "Dr Gbenga",
            text: "The entire land acquistion process was smooth.I recommend them.",
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
            pic: zain,
            label: "Barr Zainab",
            text: "I highly recommend Jaswill properties to anyone in search of their dream home.",
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
            pic: pat,
            label: "Miss Patricia",
            text: "Jaswill has a dedicated team who understood my preferences.",
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
            pic: tony,
            label: "Mr Tony",
            text: "They exceeded my exceptations, delivering quality service with proffessionalism.",
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
            pic: uc,
            label: "Mr Ucheckwu",
            text: "This company offers an exceptional experience.I wholeheartedly recommend them.",
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
                                <Image src={datum.pic} alt="pic-img"  width={100} height={100}  
                                style={{ width: '50rem',height: '20vh', objectFit: 'fit', borderRadius:'100%' }} className=''/>
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
                                    <p key={item.id} className='flex flex-row'>{item.icon}</p>
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