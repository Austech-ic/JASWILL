"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logone from '../../../../public/bg.png'
import Link from 'next/link'
import { BiLogOut, BiLogOutCircle, BiNotification, BiSolidToggleRight, BiUserCircle } from 'react-icons/bi'
import { BsArrowUp } from 'react-icons/bs'
import { FaArrowUp, FaHamburger } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown, MdWeb } from 'react-icons/md'
import styles from './dashboardheader.module.css'
import { AiFillWeiboCircle, AiOutlineUser } from 'react-icons/ai'
import {TbWorld} from 'react-icons/tb'

const DashboardHeader = () => {
  const userName = 'John Doe'
  return (
      
    <div className={styles.main}>
    <div className={styles.imgcont}>
            <Image src={logone} alt='logo-img' className={styles.img}/>
            </div>

            <div className={styles.contwo}>
      
     </div>
     <div className={styles.conthree}>
      <Link href={`/`}>
      <div className={styles.divone}>
        <TbWorld  className={styles.icon}/>
        <p>View Website</p>
        </div>
      </Link>
      <div className={styles.divone}>
        
        <BiUserCircle className={styles.icon} />
       <p>Username</p>
       </div>
       <div className={styles.divtwo}>
        <BiLogOutCircle className={styles.icon} />
       <p>Logout</p>
       </div>
     </div>
    </div>
  )
}

export default DashboardHeader;