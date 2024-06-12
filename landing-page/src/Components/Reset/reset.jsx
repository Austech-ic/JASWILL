import React, { useState } from 'react';
import styles from './reset.module.css'
import { useToast } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { BiErrorCircle } from 'react-icons/bi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forgetPassword } from '@/library/request'
import { resetPassword } from '@/library/request';


const Page = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Perform client-side validation
    if (!email) {
      setError('Please enter your email.');
      return;
    }

    // Assuming you have a server endpoint for resetting passwords
    try {
      // Make an API call to send the activation code
      const response = await forgetPassword('/Admin/ForgetPassword', { email });

      toast({
        title: 'Code Sent Successfully',
        description: 'Check your email for the code.',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      console.log('Forget Password API Response:', response);

      // Move router.push outside the conditional block
      router.push('/newdetails');

      // Check if the response indicates success
      if (!response.success) {
        // Handle errors from the server
        console.error('Server error response:', response);
        setError(response.message || 'Unknown server error.');
      }
    } catch (error) {
      console.error('Error initiating password reset:', error);

      if (error.response) {
        // The server responded with a non-2xx status code
        console.error('Server error response:', error.response.data);
        setError(error.response.data.message || 'Unknown server error.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        setError('No response received from the server.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Request setup error:', error.message);
        setError(`Error setting up the request: ${error.message}`);
      }
    }
  };




  return (
    <section className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.cont}>
         
          <p className={styles.first}>Forgot Password?</p>
          <p className={styles.second}>No worries, we will send you reset instructions</p>

          <form className={styles.classform} onSubmit={handleForgotPassword}>
            <div className={styles.div}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                placeholder='Enter your Email'
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