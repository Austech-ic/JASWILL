'use client'

import { useState } from 'react'

import styles from './page.module.css'
import one from '../../../public/one.webp'
import two from '../../../public/two.webp'
import three from '../../../public/three.webp'
import four from '../../../public/four.webp'
import Image from 'next/image'
import { FaBed, FaShower } from 'react-icons/fa'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai'

const page = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        // Decrease the currentImageIndex when left arrow is clicked
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? details.length - 1 : prevIndex - 1));
    }

    const handleNextImage = () => {
        // Increase the currentImageIndex when right arrow is clicked
        setCurrentImageIndex((prevIndex) => (prevIndex === details.length - 1 ? 0 : prevIndex + 1));
    }
    
    const details = [
        {
            id: 1,
            pic: one,
            price: "$ 623",
            label: "Apartment",
            caption: "Get started by choosing from one of our pre-built page templates to showcase your properties",
            icon: <FaBed color='gray'  />,
            type: "2 bedroom",
            icontwo: <FaShower color='gray'  />,
            typetwo: "2 bedroom",
            typethree:"1050 Sq Ft",
        },
        {
            id: 2,
            pic: two,
            price: "$ 623",
            label: "Office",
            caption: "Get started by choosing from one of our pre-built page templates to showcase your properties",
            icon: <FaBed color='gray'  />,
            type: "2 bedroom",
            icontwo: <FaShower color='gray' />,
            typetwo: "2 bedroom",
            typethree:"1050 Sq Ft",
        },
        {
            id: 3,
            pic: four,
            price: "$ 623",
            label: "Classic Home",
            caption: "Get started by choosing from one of our pre-built page templates to showcase your properties",
            icon: <FaBed color='gray' />,
            type: "2 bedroom",
            icontwo: <FaShower color='gray'  />,
            typetwo: "2 bedroom",
            typethree:"1050 Sq Ft",
        },

    ]

    return (
        <div className={styles.main}>
            
            <div className={styles.submain}>
                <p className={styles.label}>Display Latest & Featured Properties</p>
                <p className={styles.textwo}>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            </div>
            <div className={styles.carouselcont}>
            <div onClick={handlePrevImage}>
                    <AiOutlineArrowLeft />
                </div>
                <div className={styles.cont}>
                    <div key={details[currentImageIndex].id} className={styles.subcont}>
                        <Image src={details[currentImageIndex].pic} alt='pic-img' />
                        <p className={styles.price}>{details[currentImageIndex].price}</p>
                        <p className={styles.bold}>{details[currentImageIndex].label}</p>
                        <p className={styles.caption}>{details[currentImageIndex].caption}</p>
                        <hr />
                        <div className={styles.sub}>
                            <div className={styles.iconcont}>
                                <p>{details[currentImageIndex].icon}</p>
                                <p>{details[currentImageIndex].type}</p>
                            </div>
                            <div className={styles.iconcont}>
                                <p>{details[currentImageIndex].icontwo}</p>
                                <p>{details[currentImageIndex].typetwo}</p>
                            </div>
                            <div className={styles.iconcont}>
                                <p>{details[currentImageIndex].typethree}</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div onClick={handleNextImage}>
                    <AiOutlineArrowRight />
                </div>

            </div>
           
          
        </div>
    )
}

export default page