import React from 'react'
import styles from './page.module.css'
import { AiOutlineUser } from 'react-icons/ai'
import { BiLogOutCircle,BiUserCircle } from 'react-icons/bi'

const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.submain}>
        <div className={styles.contone}>

            </div>
            <div className={styles.contwo}>
                <p className={styles.text}>Sale</p>
                <p className={styles.text}>Rent</p>
                <p className={styles.text}>Short let</p>
            </div>
            <div className={styles.conthree}>
            <div className={styles.usercont}>
            <BiUserCircle />
                <p className={styles.text}>Username</p>
            </div>
            <div className={styles.logoutcont}>
            <BiLogOutCircle />
            <p className={styles.text}>Log out</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default page