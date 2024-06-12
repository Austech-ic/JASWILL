
import styles from './page.module.css'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Hand from '../../../public/hand.png'
import eye from '../../../public/eyeone.png'
import fly from '../../../public/fly.jpeg'
import flyone from '../../../public/flyone.png'
import one from '../../../public/ones.jpeg'
import two from '../../../public/twos.jpeg'
import pyr from '../../../public/pyr.jpeg'
// import pyr from '../../../public/pyr.jpeg'
import austech from '../../../public/austech.jpeg'
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
            type: "We provide top-shelf realty services, encourage action on only budget-friendly, worry-free, and profitable properties, and, thereby, bring each client's dreams to life."
        },
    ]
    const info = [
        {
            id: 1,
            pic:one,
            title:"Chikaodili Z.Elom",
            position:"Executive Director"
        },
        {
            id: 2,
            pic:two,
             title:"Prosper T.Nwankwo (MBA)",
            position:"Managing Director"
        },
        // {
        //     id: 3,
        //     pic:austech,
        //     title:"Austin Okekwu",
        //     position:"Managing Director"
        // },
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
                <div>
                <p className='text-center text-lg md:text-2xl lg:text-xl xl:text-3xl font-bold'>Management Team</p>
                </div>
                <div className='py-2 flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-x-10 xl:gap-x-14'>
                   
                    {
                        info.map((item) => (
                            <div key={item.id} className='flex flex-col items-center justify-center md:gap-y-3 lg:gap-y-3' data-aos="flip-left">
                                <div>
                                <Image src={item.pic} alt='mission-img' className=' w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] rounded-full  '/>
                                </div>
                           
                                <p className={styles.labelheads}>{item.title}</p>
                                <p className={styles.textss} >{item.position}</p>
                            </div>
                        ))
                    }


                </div>

            </div>

        </div>
    )
}

export default page
