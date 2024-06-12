import React,{ useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import emailjs from 'emailjs-com';

const Page = () => {

  const [message, setMessage] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [isOpacityTimeoutSet, setIsOpacityTimeoutSet] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      setIsFormDisabled(true); // Disable form elements
      setIsOpacityTimeoutSet(true); // Set the flag to indicate timeout is set
      const response = await emailjs.sendForm(
        'service_hlkaktj',
        'template_z9zhrlw',
        event.target,
        'lqnnLPAg7hkIv7Dj8'
      );

      if (response.status === 200) {
        setMessage('Message sent successfully.');
        event.target.reset(); // Reset form fields after successful submission
      } else {
        setMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send message. Please try again later.');
    } finally {
      setIsFormDisabled(false); // Re-enable form elements
      setTimeout(() => {
        setIsOpacityTimeoutSet(false); // Clear the flag after 10 seconds
      }, 10000);
    }
  };

  
  return (
    <div className={styles.main}>
        <div>
            <p className={styles.label}>Partner With Us</p>
            <p className={styles.text}>We boast a great number of partners and affiliate marketers who are achieving huge financial results for themselves on a monthly basis. Want to make real estate your side gig? We will support you every step of the way. Kindly fill out the form below:</p>
            <div className={styles.formcont} style={{ opacity: isOpacityTimeoutSet ? 0.5 : 1, pointerEvents: isOpacityTimeoutSet ? 'none' : 'auto' }}>
         
          <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.divcont}>
              <label htmlFor="full_name" className={styles.labeltext}>Full Name</label>
              <input type="text" id="full_name" name="full_name" placeholder='Name' className={styles.input} />
            </div>
            <div className={styles.divcont}>
              <label htmlFor="address" className={styles.labeltext}>Address</label>
              <input type="text" id="address" name="address" placeholder='(Street, City, State, Postal Code, Country)' className={styles.input} />
            </div>
            <div className={styles.divcont}>
              <label htmlFor="partner_type" className={styles.labeltext}>Type of Partner</label>
              <input type="text" id="partner_type" name="partner_type" placeholder='Individual/Company' className={styles.input} />
            </div>
            <div className={styles.divcont}>
              <label htmlFor="email" className={styles.labeltext}>Email</label>
              <input type="email" id="email" name="email" placeholder='Email' className={styles.input} />
            </div>
            <div className={styles.divcont}>
              <label htmlFor="phone" className={styles.labeltext}>Phone</label>
              <input type="text" id="phone" name="phone" placeholder='+234-3333-333-333' className={styles.input}/>
            </div>
            <div className={styles.divcont}>
              <label htmlFor="registration_date" className={styles.labeltext}>Date of Registration</label>
              <input type="text" id="registration_date" name="registration_date" className={styles.input} />
            </div>
          </div>
          <div className={styles.buttoncont}>
          <button type="submit" disabled={message !== ''}>Submit</button>
        </div>
        {message && <p>{message}</p>}
        </form>
        
        </div>


            </div>
        </div>
   
  )
}

export default Page