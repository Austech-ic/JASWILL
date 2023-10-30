
import styles from './page.module.css'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Hand from '../../../public/hand.png'
import eye from '../../../public/eyeone.png'
import fly from '../../../public/fly.jpeg'
import flyone from '../../../public/flyone.png'
import pyr from '../../../public/pyr.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const page = () => {
    const details = [
        {
            id: 1,
            pic:eye,
            label: "VISION STATEMENT",
            type: "To be the most reliable and respected real estate company in Nigeria and beyond, leading with innovation and the fear of God."
        },
        {
            id: 2,
            pic:flyone,
            label: "MISSION STATEMENT",
            type: "To stay ahead of the curve in meeting the needs of real estate investors seeking genuine investment solutions, land banking opportunities, owner-occupied housing, income properties, among others, through value-driven excellence and continued evaluation."
        },
        {
            id: 3,
            pic:pyr,
            label: "UNIQUE VALUE PROPOSITION",
            type: "We provide top-shelf realty services, encourage action on only budget-friendly, worry-free, and profitable properties, and, thereby, bring each client dream(s) to life."
        },
    ]
    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <p className={styles.headtext}>About Us</p>
            </div>
            <div className={styles.submain}>
                <div className={styles.subone} data-aos="flip-up">
                    {/* <p className={styles.label}>INTRODUCTION</p> */}
                    <div className={styles.imgcont}>
                        <Image src={Hand} className={styles.img} alt='hand-img' />
                    </div>
                    <div className={styles.textcont}>
                        <p className={styles.text}>Jaswill Properties Limited (RC: 7167240) is a fully functional real estate company in Nigeria that is leading the way in the purchasing and/or selling of properties. Our effort is constantly focused on the delight of our clients, who are guaranteed value for their investments. We lace our brokerage and estate development services with ingenuity and skill,thanks to our solid network and infusion of modern technology. </p>
                    </div>

                </div>
                <div className={styles.subtwo}>
                    {
                        details.map((item) => (
                            <div key={item.id} className={styles.contone} data-aos="flip-right">
                                <div className={styles.picont}>
                                <Image src={item.pic} alt='mission-img' className={styles.picimg}/>
                                </div>
                           
                                <p className={styles.labelhead}>{item.label}</p>
                                <p className={styles.texts} >{item.type}</p>
                            </div>
                        ))
                    }


                </div>

            </div>

        </div>
    )
}

export default page
