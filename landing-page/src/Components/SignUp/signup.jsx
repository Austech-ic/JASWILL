import React, { useState } from 'react';
import styles from './signup.module.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NEXT_PUBLIC_BASE_URL = "https://jaswillrealestate.onrender.com/api/Admin";

const SignUpcomp = () => {
  const toast = useToast();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/SignUpAdmin`, {
        username: values.username,
        email: values.email,
        phonenumber: values.phone,
        password: values.password,
      });

      if (response.status === 200) {
        toast({
          title: 'Registration Successful',
          description: 'You have successfully registered.',
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });
        router.push('/signin');
      } else {
        toast({
          title: 'Authentication Failed',
          description: 'Signup Failed.',
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
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.cont}>
            <div className={styles.signcont}>
              <p className={styles.first}>Sign Up</p>
              <p className={styles.second}>Create an account to continue</p>
            </div>
            <Formik
              initialValues={{
                username: '',
                email: '',
                phone: '',
                password: '',
                agree: false,
              }}
              validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Field cannot be empty'),
                username: Yup.string().required('Field cannot be empty'),
                phone: Yup.string().required('Field cannot be empty'),
                password: Yup.string().min(6, 'Password should be at least 6 characters').required('Field cannot be empty'),
                agree: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
              })}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values, isSubmitting }) => (
                <Form className={styles.classform} autoComplete='off'>
                  <div className='flex flex-col gap-2 text-gray-500'>
                    <label className='text-sm md:text-2xl lg:text-base xl:text-lg '>Username</label>
                    <Field
                      className={styles.input}
                      placeholder='John Doe'
                      type='text'
                      name='username'
                    />
                    <ErrorMessage name="username" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                  </div>
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
                    <label className='text-sm md:text-2xl lg:text-base xl:text-lg '>Phone Number</label>
                    <Field
                      className={styles.input}
                      placeholder='Enter your Phone Number'
                      type="text"
                      name="phone"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
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

                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-2  text-gray-500'>
                      <Field
                        type='checkbox'
                        name='agree'
                        id='agree'
                        checked={values.agree}
                        onChange={(e) => setFieldValue('agree', e.target.checked)}
                        className='mr-2'
                      />
                      <label htmlFor='agree' className={styles.acc}>I agree to processing of <span className={styles.per}>Personal Data</span></label>
                    </div>
                    <ErrorMessage name="agree" component="div" className="text-red-500 text-xs md:text-xl lg:text-sm" />
                  </div>
                  <div className='py-3'>
                    <button
                      type="submit"
                      className={styles.button}
                      disabled={isSubmitting}
                    >
                      Sign Up
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.last}>
              <p className={styles.acc}>Already have an account?</p>
              <Link href={`/signin`} className={styles.link}>
                <p className={styles.sign}>Login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpcomp;
