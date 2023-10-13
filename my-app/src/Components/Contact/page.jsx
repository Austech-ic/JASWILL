import Image from 'next/image'
import React from 'react'
import styles from './pages.module.css'
import contact from '../../../public/contact-us.webp'
const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.cont}>
            <div className={styles.subone}>
                <Image src={contact} alt='contact-img' className={styles.img} />
            </div>
            <div className={styles.subtwo}>
                <p className={styles.label}>Contact Us</p>
                <p className={styles.subtext}>Do you have questions or in need of further clarification? Speak to a Counsellor</p>
                <div className={styles.mobilecont}> 
                <p>Call Us:</p>
                <p> +234 7012 488 242</p>
                </div>
                <div className={styles.mobilecont}>
                <p>Whatsapp:</p>
                <p> +234 7034 483 518</p>
                </div>
                
               
            </div>
        </div>
    </div>
  )
}

export default page