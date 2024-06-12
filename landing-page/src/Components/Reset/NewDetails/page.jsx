import React, { useState } from 'react';
import styles from './page.module.css';
import { FcGoogle } from 'react-icons/fc';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import Link from 'next/link';
import { resetPassword } from '@/library/request';
// import Navbar from '../Navbar/navbar';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

// const NEXT_PUBLIC_BASE_URL = "https://jaswillrealestate.onrender.com/api/Admin";


const Page = () => {
  const toast = useToast();
  const router = useRouter();


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  

  const [formData, setFormData] = useState({
    code: '',
    newPassword: '',
    confirmPassword: '',
    // rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: 'Enter correct Email',
    code: 'Enter Verification Code',
    newPassword: 'Password should be at least 6 characters',
    confirmPassword: 'Re-enter your password',
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear the specific error message based on the input field
    let error = '';
    switch (name) {
      case 'code':
        error = value.length >= '4' ? '' : 'Enter Verification Code';
        break;
      case 'newPassword':
        error = value.length >= 6 ? '' : 'Password should be at least 6 characters';
        break;

        case 'confirmPassword':
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
    const codeError =
    formData.code.length >= 4 ? '' : 'Enter Verification Code';

    const newPasswordError =
      formData.newPassword.length >= 6 ? '' : 'Password should be at least 6 characters';
  
      const confirmPasswordError =
      formData.confirmPassword.length >= 6 ? '' : 'Password should be at least 6 characters';
  
    setErrors({
      code: codeError,
      newPassword: newPasswordError,
      confirmPassword: confirmPasswordError,
    });
  
    // Check if there are no errors
    if (!newPasswordError && !confirmPasswordError && !codeError) {

      try {
        // Make an API call to send the activation code
        const response = await resetPassword('/Admin/ResetPassword', {
          code: formData.code,
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword,
        });
        
        toast({
          title: 'Login Successfully',
          description: 'Password update successfully.',
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });

          // Move router.push outside the conditional block
        router.push(`/admin/dashboard`);

        // Check if the response indicates success
        if (response.success) {
          console.error('Server error response:', response);
        setErrors(response.message || 'Unknown server error.');
        }
         else {
          // Handle errors from the server
          setErrors(response.message || 'Unknown error occurred.');
        }
      } catch (error) {
        console.error('Error initiating password reset:', error);

        if (error.response) {
          // The server responded with a non-2xx status code
          console.error('Server error response:', error.response.data);
          setErrors(error.response.data.message || 'Unknown server error.');
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
          setErrors('No response received from the server.');
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Request setup error:', error.message);
          setErrors(`Error setting up the request: ${error.message}`);
        }
      }
    };
  };
  

  const isSubmitButtonDisabled =
  !formData.code ||          // Check if code input is not filled
  formData.newPassword !== formData.confirmPassword ||  // Check if password and confirm password are not equal
  formData.newPassword.length < 6;  // Check if password length is less than 6 characters





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
                <label className={styles.label}>Activation Code:</label>
                <div className={styles.inputs}>
                  <input
                    className={styles.classinput}
                    placeholder="Enter code"
                    type={showPassword ? "text" : "code"}
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                  />
                 
                </div>
                {errors.code && <p className=" text-red-500 text-xs md:text-lg lg:text-sm xl:text-base mt-1 md:mt-2">{errors.code}</p>}
              </div>

              <div className={styles.div}>
                <label className={styles.label}>Password:</label>
                <div className={styles.inputs}>
                  <input
                    className={styles.classinput}
                    placeholder="Enter New Password"
                    type={showPassword ? "text" : "newPassword"}
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                  />
                  <div className={styles.eye} onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeFill className={styles.icon} /> : <BsFillEyeSlashFill className={styles.icon} />}
                  </div>
                </div>
                {errors.newPassword && <p className=" text-red-500 text-xs md:text-lg lg:text-sm xl:text-base mt-1 md:mt-2">{errors.newPassword}</p>}
              </div>
              <div className={styles.div}>
                <label className={styles.label}>Confirm Password:</label>
                <div className={styles.inputs}>
                  <input
                    className={styles.classinput}
                    placeholder="Enter Password"
                    type={showPassword ? "text" : "confirmPassword"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <div className={styles.eye} onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeFill className={styles.icon} /> : <BsFillEyeSlashFill className={styles.icon} />}
                  </div>
                </div>
                {errors.confirmPassword && <p className=" text-red-500 text-xs md:text-lg lg:text-sm xl:text-base mt-1 md:mt-2">{errors.confirmPassword}</p>}
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
    Enter
  </button>
</div>


             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
