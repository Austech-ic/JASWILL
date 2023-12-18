import React, { useState } from 'react';
import styles from './signup.module.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import Link from 'next/link';
import Navbar from '../Navbar/navbar';
import { useForm } from "@mantine/form";
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = "https://jaswillrealestate.onrender.com/api/Admin";

const SignUpcomp = () => {

  const toast = useToast();
  const router = useRouter();

  const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: 'Username is required',
    email: 'Email is required',
    phoneNumber: "Phone Number is required",
    password: 'Password should include at least 6 characters',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    const usernameError = /^[a-zA-Z0-9_]{3,20}$/.test(formData.username) ? '' : '';
    const emailError = /^\S+@\S+$/.test(formData.email) ? '' : 'Enter Correct email';
    const phoneNumberError =
      formData.phoneNumber.length >= 11 ? '' : 'Phone number should include at least 11 characters';
    const passwordError =
      formData.password.length >= 6 ? '' : 'Password should include at least 6 characters';


    setErrors({
      username: usernameError,
      phoneNumber: phoneNumberError,
      email: emailError,
      password: passwordError,
    });

    // Check if there are no errors
    if (!usernameError && !emailError && !phoneNumberError && !passwordError) {
      setErrMsg("Invalid Entry");

      try {
        const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/SignUpAdmin`, {
          username: formData.username,
          email: formData.email,
          phonenumber: formData.phoneNumber,
          password: formData.password,
        });

        // Assuming the server returns a success status
        if (response.status === 200) {
    // Show a success message
    
    toast({
      title: 'Registration Successful',
      description: 'You have successfully registered.',
      status: 'success',
      position: 'top',
      duration: 5000,
      isClosable: true,
    });

    // Redirect to the desired page
    router.push('/signin');
  } else {
    // Show an error message if authentication fails
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
        // Handle errors from the Axios request
        console.error('Authentication error:', error);

        // Show an error message
        toast({
          title: 'Authentication Failed',
          description: 'An error occurred during authentication.',
          status: 'error',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };



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



            <form className={styles.classform} onSubmit={handleSubmit}>

              <div className={styles.div}>
                <label className={styles.label}>Username:</label>
                <input
                  className={styles.input}
                  placeholder='John Doe'
                  type='text'
                  name='username'
                  value={formData.username}
                  onChange={handleInputChange}
                />
                {errors.username && <p className="text-red-500">{errors.username}</p>}
              </div>

              <div className={styles.div}>
                <label className={styles.label}>Email:</label>
                <input
                  className={styles.input}
                  placeholder='Enter your Email'
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div className={styles.div}>
                <label className={styles.label}>Phone Number:</label>
                <input
                  className={styles.input}
                  placeholder='Enter your Phone Number'
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
              </div>

              <div className={styles.div}>
                <label className={styles.label}>Password:</label>
                <div className={styles.inputs}>
                  <input
                    className={styles.classinput}
                    placeholder="Enter Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <div className={styles.eye} onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeSlashFill size={15} /> : <BsFillEyeFill size={15} />}
                  </div>
                </div>
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>

              <div className={styles.rem}>

                <div className={styles.subrem}>
                  <input type='checkbox' className={styles.check} />
                  <p className={styles.acc}>I agree to processing of <span className={styles.per}>Personal Data</span> </p>
                </div>

              </div>
              <div className={styles.buttondiv}>
                <button className={styles.button} onClick={handleSubmit}>Sign up</button>
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

export default SignUpcomp