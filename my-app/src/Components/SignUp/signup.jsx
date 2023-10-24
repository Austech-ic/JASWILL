import React from 'react'
import styles from './signup.module.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import Link from 'next/link';
import Navbar from '../Navbar/navbar';


const SignIn = () => {
  return (
    <section className={styles.head}>
      <Navbar />
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.cont}>
          <div className={styles.signcont}>
          <p className={styles.first}>Sign Up</p>
          <p className={styles.second}>Create an account to continue</p>
          </div>
         
          

          <form className={styles.classform}>

            <div className={styles.div}>
              <label className={styles.label}>Username:</label>
              <input
                className={styles.input}
                placeholder='John Doe'
                type='tel'
              />
            </div>

            <div className={styles.div}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                placeholder='Enter your Email'
                type='email'
              />
            </div>

            <div className={styles.div}>
              <label className={styles.label}>Password:</label>
              <div  className={styles.inputs}>
              <input
              className={styles.classinput}
                placeholder='Enter Password' />
                <BsFillEyeSlashFill size={15} className={styles.eye}/>
                </div>
            </div>
            <div className={styles.div}>
              <label className={styles.label}>Confirm Password:</label>
              <div  className={styles.inputs}>
              <input
              className={styles.classinput}
                placeholder='Confirm Password' />
                <BsFillEyeSlashFill size={15} className={styles.eye}/>
                </div>
            </div>

            <div className={styles.rem}>

              <div className={styles.subrem}>
                <input type='checkbox' className={styles.check} />
                <p className={styles.acc}>I agree to processing of <span className={styles.per}>Personal Data</span> </p>
              </div>

            </div>
            <div className={styles.buttondiv}>
              <button className={styles.button}>Sign up</button>
            </div>

               <div className={styles.authcont}>
               <FcGoogle />
               <p className={styles.up}>Sign up with google</p>
               </div>
            
            <div className={styles.last}>
              <p className={styles.acc}>Already have an account?</p>
              <Link href={`/signin`} className={styles.link}>
              <p className={styles.sign}>Login</p>
              </Link>
            </div>




          </form>
        </div>

      </div>
    </div>
    </section>
  )
}

export default SignIn