import React, { useState } from 'react';
import styles from './login.module.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import Link from 'next/link';
import Navbar from '../Navbar/navbar';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NEXT_PUBLIC_BASE_URL = "https://jaswillrealestate.onrender.com/api/Admin";



const Login = () => {
  const toast = useToast();
  const router = useRouter();


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/SignInAdmin`, {
        email: values.email,
        password: values.password,
      });

      if (response.status === 200) {
        toast({
          title: 'Login Successful',
          description: 'You have successfully login.',
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });
        router.push('/admin/dashboard');
      } else {
        toast({
          title: 'Authentication Failed',
          description: 'Signin Failed.',
          status: 'error',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Authentication error:', error);
      toast({
        title: 'Authentication Failed',
        description: 'An error occurred during authentication.',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
    }
    setSubmitting(false);
  };
  

  



  return (
    <section className={styles.head}>
      {/* <Navbar /> */}
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.cont}>
            <p className={styles.first}>Welcome Back!</p>
            <p className={styles.second}>We missed you! Please enter your details</p>

            

            <Formik
              initialValues={{
                email: '',
                password: '',
               
              }}
              validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Field cannot be empty'),
                password: Yup.string().min(6, 'Password should be at least 6 characters').required('Field cannot be empty'),
               
              })}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values, isSubmitting }) => (
                <Form className={styles.classform} autoComplete='off'>
                 
                  <div className='flex flex-col gap-2 text-gray-500'>
                    <label className='text-sm md:text-2xl lg:text-base xl:text-lg '>Email</label>
                    <Field
                      className={styles.input}
                      placeholder='Enter Your Email'
                      type="text"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                  </div>

               

                  <div className='flex flex-col gap-2 text-gray-500'>
                    <label className='text-sm md:text-2xl lg:text-base xl:text-lg '>Password</label>
                    <div className={styles.inputs}>
                      <Field
                        className={styles.classinput}
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                      />
                      <div className={styles.eye} onClick={togglePasswordVisibility}>
                        {showPassword ? <BsFillEyeFill className={styles.icon} /> : <BsFillEyeSlashFill className={styles.icon} />}
                      </div>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                  </div>

                 
                  <div className='py-3'>
                    <button
                      type="submit"
                      className={styles.button}
                      disabled={isSubmitting}
                    >
                     Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
              <div className={styles.last}>
                <p className={styles.acc}>Dont have an account?</p>
                <Link href={`/signup`} className={styles.link}>
                  <p className={styles.sign}>Sign up</p>
                </Link>
              </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
