import React, { useState } from 'react';
import styles from './page.module.css'
import { FcGoogle } from 'react-icons/fc';
import { BiErrorCircle } from 'react-icons/bi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { resetPassword } from '@/library/request'
import { forgetPassword } from '@/library/request'


const Page = () => {
    const [email, setEmail] = useState('');
    const [activationCode, setActivationCode] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Perform client-side validation
    if (!email) {
      setError('Please the code sent to your email.');
      return;
    }

    // Assuming you have a server endpoint for resetting passwords
    try {
        // Make an API call to validate the activation code
        const response = await resetPassword('/Admin/ResetPassword', { email, activationCode });
    
        // Check if the response contains the activation code
        if (response.code) {
          // Redirect to the page where the user enters the new password
          router.push(`/newdetails?email=${email}`);
        } else {
          // Handle errors from the server
          setError(response.message || 'Something went wrong.');
        }
      } catch (error) {
        console.error('Error initiating password reset:', error);
        setError('Something went wrong. Please try again.');
      }
    };
  

  return (
    <section className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.cont}>
         
          <p className={styles.first}>Activate Code?</p>
          <p className={styles.second}>No worries, we will send you reset instructions</p>

          <form className={styles.classform} onSubmit={handleResetPassword}>
            <div className={styles.div}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                placeholder='Enter Activation Code'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && (
              <div className={styles.email} style={{padding: '10px', color: 'red' }}>
                <BiErrorCircle size={20} />
                <p className={styles.new}>{error}</p>
              </div>
            )}

            <div className={styles.buttondiv}>
              <button className={styles.button} type='submit'>
                Send Activation Code
              </button>
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

export default Page