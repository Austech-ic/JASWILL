import React from 'react'
import styles from './pages.module.css'
import { IoIosMenu,IoMdCall } from 'react-icons/io';
import {FaWhatsappSquare} from 'react-icons/fa'

const pages = () => {
  return (
    <div className={styles.main}>
      <div className={styles.subone}>
        <IoMdCall />
        <p>+234-7012-488-242</p>
      </div>
      <div className={styles.subtwo}>
      <FaWhatsappSquare color='#25D366' />
      <p>+234-7034-483-518</p>

      </div>
    
        </div>
  )
}

export default pages