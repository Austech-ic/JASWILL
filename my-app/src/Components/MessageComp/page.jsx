import React, { useState } from 'react';
import Image from 'next/image'
import back from '../../../public/back.png'
import styles from './page.module.css'
import { FaWhatsapp } from 'react-icons/fa'

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleWhatsAppSubmit = async (e) => {
    e.preventDefault();

    // Use a messaging service API (Twilio in this example) to send the form data to WhatsApp
    try {
      const response = await fetch('https://api.twilio.com/2010-04-01/Accounts/AC0e6c5765b866ede09126c0e57381f7f3/Messages.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Form submitted successfully!');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error submitting form.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  };
  return (
    <div className={styles.main}>
        <div>
            <Image src={back} alt='back-img' className={styles.img}/>
            <p className={styles.text}>Get in Touch</p>
            <form onSubmit={handleWhatsAppSubmit}>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Name</label>
                <input type="text"
                 placeholder='' 
                 required
                className={styles.input}
               />
                </div>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Email</label>
                <input type="text" placeholder='' 
                required
                className={styles.input}
                />
                </div>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Phone Number</label>
                <input type="text" placeholder='' 
                required
                className={styles.input}/>
                </div>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Choose Location To Buy Property in Abuja</label>
                <input type="text" placeholder=''
                required
                 className={styles.input}/>
                </div>
                <div className={styles.cont}>
                <label htmlFor="" className={styles.label}>Message</label>
                <input type="text" placeholder=''
                required
                 className={styles.input}/>
                </div>
                <div className={styles.contbutton}>
                <div className={styles.conts}>
                    <FaWhatsapp className={styles.icon} />
                <button>Submit on Whatsapp</button>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default page