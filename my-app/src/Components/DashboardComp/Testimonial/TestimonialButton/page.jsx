import React from 'react'
import {IoMdAdd } from 'react-icons/io'
import styles from './testimonialbutton.module.css'

const Page = ({ onClick }) => {
  return (
    <div className={styles.main}>
        <div className={styles.subcont}>
    <button onClick={onClick} className={styles.button}>
    <IoMdAdd className={styles.icon} />
        Create Testimonial</button>
   
  </div>
    </div>
  )
}

export default Page