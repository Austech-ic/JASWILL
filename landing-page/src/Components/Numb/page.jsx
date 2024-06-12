import React from 'react'
import { MdKeyboardArrowDown,MdLocationPin,MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight ,MdLooksOne} from 'react-icons/md'
import {PiNumberOne,PiNumberTwo,PiNumberThree,PiNumberFour,PiDotsThreeBold} from 'react-icons/pi'
import {BiSolidCloudUpload} from 'react-icons/bi'
import styles from './page.module.css'

const page = () => {
  return (
    <div className={styles.main}>
         <div className={styles.subfive}>
          <div className={styles.iconcont}>
            <MdOutlineKeyboardDoubleArrowLeft className={styles.icons} />
          </div>
          <div className={styles.iconcont}>
          <PiNumberOne className={styles.icons}  />
          </div>
          <div className={styles.iconcont}>
          <PiNumberTwo className={styles.icons}  />
          </div>
          <div className={styles.iconcont}>
          <PiNumberThree className={styles.icons}  />
          </div>
          <div className={styles.iconcont}>
          <PiNumberFour className={styles.icons}  />
          </div>
          <div className={styles.iconcont}>
            <PiDotsThreeBold className={styles.icons}  />
          </div>
          <div className={styles.iconcont}>
            <MdOutlineKeyboardDoubleArrowRight className={styles.icons}  />
          </div>


        </div>
    </div>
  )
}

export default page