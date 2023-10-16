import React from 'react'
import styles from './reset.module.css'
import { FcGoogle } from 'react-icons/fc';
import { BiErrorCircle } from 'react-icons/bi';
import Link from 'next/link';


const SignUp = () => {
  return (
    <section className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.cont}>
         
          <p className={styles.first}>Forgot Password?</p>
          <p className={styles.second}>No worries, we will send you reset instructions</p>

          <form className={styles.classform}>

           
            <div className={styles.div}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                placeholder='Enter your Email'
                type='email'
              />
            </div>

               <div className={styles.email}>
               <BiErrorCircle size={30} color='gray' />
               <p className={styles.new}>We cant find correct address.Resend the email you have registered</p>
               </div>

               <div className={styles.buttondiv}>
              <button className={styles.button}>Reset Password</button>
            </div>

            
            <div className={styles.last}>
              <p className={styles.acc}>Back to</p>
              <Link href={`/signin`} className={styles.link}>
              <p className={styles.sign}>Login</p>
              </Link>
            </div>




          </form>
        </div>

      </div>
    </section>
  )
}

export default SignUp