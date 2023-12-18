import React, { useState } from 'react';
import styles from './login.module.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import Link from 'next/link';
import Navbar from '../Navbar/navbar';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = "https://jaswillrealestate.onrender.com/api/Admin";


const Login = () => {
  const toast = useToast();
  const router = useRouter();


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: 'Enter correct Email',
    password: 'Password should be at least 6 characters',
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear the specific error message based on the input field
    let error = '';
    switch (name) {
      case 'email':
        error = /^\S+@\S+$/.test(value) ? '' : 'Enter a valid email';
        break;
      case 'password':
        error = value.length >= 6 ? '' : 'Password should be at least 6 characters';
        break;
      default:
        break;
    }

    // Update the specific error state
    setErrors({
      ...errors,
      [name]: error,
    });

    // Update the form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation logic
    const emailError = /^\S+@\S+$/.test(formData.email) ? '' : 'Enter Correct email';
    const passwordError =
      formData.password.length >= 6 ? '' : 'Password should be at least 6 characters';
  
    setErrors({
      email: emailError,
      password: passwordError,
    });
  
    // Check if there are no errors
    if (!emailError && !passwordError) {

      try {
        // Example authentication logic with Axios
        const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/LoginAdmin`, {
          email: formData.email,
          password: formData.password,
        });

    
        // Assuming the server returns a success status
        if (response.status === 200) {
          
          toast({
      title: 'Login Successful',
      description: 'You have successfully login.',
      status: 'success',
      position: 'top',
      duration: 5000,
      isClosable: true,
    });

     // Redirect to the desired page
    router.push('/admin/dashboard');
  } else {
    // Show an error message if authentication fails
    toast({
      title: 'Authentication Failed',
      description: 'Login Failed.',
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
          title: 'Login Failed',
          description: 'Incorrect Email or Password.',
          status: 'error',
          position: 'top',
          duration: 1000,
          isClosable: true,
        });
      }
    }
  };
  

  const isSubmitButtonDisabled =
  !/^\S+@\S+$/.test(formData.email) || formData.password.length < 6;



  return (
    <section className={styles.head}>
      {/* <Navbar /> */}
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.cont}>
            <p className={styles.first}>Welcome Back!</p>
            <p className={styles.second}>We missed you! Please enter your details</p>

            <form className={styles.classform} onSubmit={handleSubmit}>
              <div className={styles.div}>
                <label className={styles.label}>Email:</label>
                <input
                  className={styles.input}
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                {errors.email && <p className=" text-red-500 text-xs md:text-lg lg:text-sm xl:text-base mt-1 md:mt-2">{errors.email}</p>}
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
                    {showPassword ? <BsFillEyeFill className={styles.icon} /> : <BsFillEyeSlashFill className={styles.icon} />}
                  </div>
                </div>
                {errors.password && <p className=" text-red-500 text-xs md:text-lg lg:text-sm xl:text-base mt-1 md:mt-2">{errors.password}</p>}
              </div>

              <div className={styles.rem}>
                {/* <div className={styles.subrem}>
                  <input
                    type="checkbox"
                    className={styles.check}
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleCheckboxChange}
                  />
                  <p className={styles.acc}>Remember me</p>
                </div> */}

                <div className={styles.subrem}>
                  <Link href={`/reset`} className={styles.link}>
                    <p className={styles.sign}>Forgot Password</p>
                  </Link>
                </div>
              </div>

              <div className={styles.buttondiv}>
              <button
    className={`w-[100%] p-5 ${
      isSubmitButtonDisabled
        ? 'bg-blue cursor-not-allowed'
        : 'bg-maroon text-white'
    }  disabled:bg-gray-300 px-4 py-[6px] md:py-[10px] lg:py-[5px] xl:py-[8px] rounded-xl text-sm md:text-xl lg:text-lg xl:text-xl`}
    type="submit"
    disabled={isSubmitButtonDisabled}
    onClick={handleSubmit}
  >
    Login
  </button>
</div>



              {/* <div className={styles.authcont}>
                <FcGoogle />
                <p className={styles.up}>Login with Google</p>
              </div> */}

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
  );
};

export default Login;
