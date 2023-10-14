
import styles from './page.module.css'
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.submain}>
        <div className={styles.subone} data-aos="flip-up">
            <p className={styles.label}>INTRODUCTION</p>
            <p className={styles.text}>Jaswill Properties Limited (RC: 7167240) is a fully functional real estate company in Nigeria that is leading the way in the purchasing and/or selling of properties. Our effort is constantly focused on the delight of our clients, who are guaranteed value for their investments. We lace our brokerage and estate development services with ingenuity and skill, thanks to our solid network and infusion of modern technology. </p>
        </div>
        <div className={styles.subtwo}>
            <div className={styles.contone} data-aos="flip-right">
                <p className={styles.labels}>VISION STATEMENT</p>
                <p className={styles.texts} >To be the most reliable and respected real estate company in Nigeria and beyond, leading with innovation and the fear of God.</p>
            </div>
            <div className={styles.contwo} data-aos="flip-left">
                <p className={styles.labels}>MISSION STATEMENT</p>
                <p className={styles.texts}
                  >To stay ahead of the curve in meeting the needs of real estate investors seeking genuine investment solutions, land banking opportunities, owner-occupied housing, income properties, among others, through value-driven excellence and continued evaluation.</p>
            </div>
        </div>
        <div className={styles.subone} data-aos="flip-down">
            <p className={styles.label}>UNIQUE VALUE PROPOSITION</p>
            <p className={styles.text}>We provide top-shelf realty services, encourage action on only budget-friendly, worry-free, and profitable properties, and, thereby, bring each client’s dream(s) to life.</p>
        </div>
        </div>
       
    </div>
  )
}

export default page
