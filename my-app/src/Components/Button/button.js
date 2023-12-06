import React from 'react'
import {IoMdAdd } from 'react-icons/io'
import styles from './button.module.css'

const Button = ({ onClick }) => {
  return (
    <div className={styles.main}>
        <div className={styles.subcont}>
    <button onClick={onClick} className={styles.button}>
    <IoMdAdd className={styles.icon} />
        Create</button>
   
  </div>
    </div>
  )
}

export default Button