import React from 'react'
import styles from './login.module.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import Link from 'next/link';
import Navbar from '../Navbar/navbar';



const Login = () => {
  return (
    <section className={styles.head}>
      <Navbar/>
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.cont}>
         
          <p className={styles.first}>Welcome Back!</p>
          <p className={styles.second}>We missed you! Please enter your details</p>

          <form className={styles.classform}>

            <div className={styles.div}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                placeholder='Email'
              />
            </div>

            <div className={styles.div}>
              <label className={styles.label}>Password:</label>
              <div  className={styles.inputs}>
              <input
              className={styles.classinput}
                placeholder='password' />
                <BsFillEyeSlashFill size={15} className={styles.eye}/>
                </div>
            </div>

            <div className={styles.rem}>

              <div className={styles.subrem}>
                <input type='checkbox' className={styles.check} />
                <p className={styles.acc}>Remember me</p>
              </div>

              <div className={styles.subrem}>
                <Link href={`/reset`} className={styles.link}>
                <p className={styles.sign}>Forgot Password</p>
                </Link>
              </div>

            </div>
            <div className={styles.buttondiv}>
              <button className={styles.button}>Login</button>
            </div>

               <div className={styles.authcont}>
               <FcGoogle />
               <p className={styles.up}>Login with google</p>
               </div>
            
            <div className={styles.last}>
              <p className={styles.acc}>Dont have an account?</p>
              <Link href={`/signup`} className={styles.link}>
              <p className={styles.sign}>Sign up</p>
              </Link>
              
            </div>




          </form>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Login