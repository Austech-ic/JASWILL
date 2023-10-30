import React from 'react'
import styles from './pages.module.css'
import { IoIosMenu,IoMdCall } from 'react-icons/io';
import {FaWhatsappSquare} from 'react-icons/fa'
import Link from 'next/link';

const pages = () => {
  return (
    <div className={styles.main}>
     <Link href="tel:+2347012488242" className={styles.link}>
      <div className={styles.subone}>
        <IoMdCall />
        <p>Call +234-7012-488-242</p>
      </div>
      </Link>
      <Link href="https://wa.me/message/J3AEV6SQGELOJ1" className={styles.link}>
      <div className={styles.subtwo}>
      <FaWhatsappSquare color='#25D366' />
      <p>Whatsapp Us</p>

      </div>
      </Link>
    
        </div>
  )
}

export default pages