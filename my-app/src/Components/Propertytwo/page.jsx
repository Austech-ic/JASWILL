import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {IoIosLocate} from 'react-icons/io'
import styles from './page.module.css'

const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.submain}>
       <div className={styles.contone}>
        <div className={styles.iconcont}>
          <p>Sale</p>
          <MdKeyboardArrowDown className={styles.icon} />
        </div>
        <div className={styles.iconcont}>
          <p>Type</p>
          <MdKeyboardArrowDown className={styles.icon} />
        </div>
        <div className={styles.iconcont}>
          <p>Beds</p>
          <MdKeyboardArrowDown className={styles.icon} />
        </div>
        <div className={styles.iconcont}>
          <p>Min Price</p>
          <MdKeyboardArrowDown className={styles.icon}/>
        </div>
        <div className={styles.iconcont}>
          <p>Max Price</p>
          <MdKeyboardArrowDown className={styles.icon} />
        </div>
       </div>
       <div className={styles.contwo}>
       <div className={styles.iconconts}>
        <div className={styles.locationcont}>
        <AiOutlineSearch className={styles.icon} />
         <input type="text" placeholder='Location' className={styles.input} />
        </div>
      
          <IoIosLocate className={styles.icon} />
        </div>
        <div>
        <BiCart className={styles.carticon} />
        </div>
       </div>
      </div>
    </div>
  )
}

export default page