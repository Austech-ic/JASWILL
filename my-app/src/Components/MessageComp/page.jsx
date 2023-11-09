import React from 'react'
import Image from 'next/image'
import back from '../../../public/back.png'
import styles from './page.module.css'
import { FaWhatsapp } from 'react-icons/fa'

const page = () => {
  return (
    <div className={styles.main}>
        <div>
            <Image src={back} alt='back-img' className={styles.img}/>
            <p className={styles.text}>Get in Touch</p>
            <form action="">
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Name</label>
                <input type="text" placeholder='' className={styles.input}/>
                </div>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Email</label>
                <input type="text" placeholder='' className={styles.input}/>
                </div>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Phone Number</label>
                <input type="text" placeholder='' className={styles.input}/>
                </div>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Choose Location To Buy Property in Abuja</label>
                <input type="text" placeholder='' className={styles.input}/>
                </div>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Message</label>
                <input type="text" placeholder='' className={styles.input}/>
                </div>
                <div className={styles.contbutton}>
                <div className={styles.conts}>
                    <FaWhatsapp className={styles.icon} />
                <button>Submit on Whatsapp</button>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page