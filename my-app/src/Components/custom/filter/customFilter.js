import React, { Fragment } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {IoIosLocate} from 'react-icons/io'
import styles from '../filter/css/custom.module.css'

const customFilter = () => {
  return (
    <Fragment>
          <div className={styles.mains}>
        <div className={styles.submains}>
        <div className={styles.contones}>

            </div>
            <div className={styles.contwos}>
                <p className={styles.texts}>Sale</p>
                <p className={styles.texts}>Rent</p>
                <p className={styles.texts}>Short let</p>
            </div>
           
        </div>
    </div>
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
        
         <input type="text" placeholder='Location' className={styles.input} />
        </div>
      
        <AiOutlineSearch className={styles.icon} />
        </div>
        <div>
        <BiCart className={styles.carticon} />
        </div>
       </div>
      </div>
    </div>
    </Fragment>
  )
}

export default customFilter