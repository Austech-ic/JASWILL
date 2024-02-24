import React, { useState } from 'react';
import styles from './modal.module.css';
import { MdSaveAlt } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { createBlogPost } from '@/library/request';
import { format } from 'date-fns';  // Import the format function
import { v4 as uuidv4 } from 'uuid';
import { createRealEstate } from '@/library/request';
import Button from '@/Components/Button/button';

const Index = ({ handleClose, show, children, setCounter }) => {
  const [message, setMessage] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [isOpacityTimeoutSet, setIsOpacityTimeoutSet] = useState(false);


  const toast = useToast();
  const router = useRouter();
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  const [ImageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [titleError, setTitleError] = useState('');
  const [imageError, setImageError] = useState('');


  const [formData, setFormData] = useState({
    title: '',
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImageUrl(file);
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    setImageUrl(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setTitleError('');
    setImageError('');
  
    if (!formData.title) {
      setTitleError('Please enter a title.');
    }
  
  

    // If any of the requirements is not met, return without saving
    if (!formData.title) {
      return;
    }
  
    const formValues = new FormData();
   
    formValues.append('Title', formData.title);
    
  
    try {
      setIsFormDisabled(true); // Disable form elements
      setIsOpacityTimeoutSet(true); // Set the flag to indicate timeout is set

      createBlogPost('Blog/CreateBlog', formValues).then((response) => {
        toast({
          title: 'Category Created Successfully',
          description: 'You created a category.',
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });
        setCounter((prev) => prev + 1);
        handleClose();
        // Clear the form data after saving
        setFormData({
          title: '',
        });
      })
    } catch (error) {
      console.error('Upload failed!', error);
    } finally {
      setIsFormDisabled(false); // Re-enable form elements
      setTimeout(() => {
        setIsOpacityTimeoutSet(false); // Clear the flag after 10 seconds
      }, 10000);
    }

  };
  


  return (
    <div className={`${styles.modal} ${showHideClassName} ${isOpacityTimeoutSet ? styles.opaque : ''}`}>

      <section className={styles.modalMain}>
        {children}
        <form>
          <div className={styles.contone}>
            <div className={styles.divcont}>
              <label className={styles.label}>Title*</label>
              {titleError && <div className={styles.errorMessage}>{titleError}</div>}
              <input
                placeholder='Title'
                className={styles.input}
                value={formData.title}
                required
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className={styles.buttonconts}>
              <button 
              type="submit" disabled={message !== ''} 
              className={styles.buttontwo} onClick={handleSave}>
                <MdSaveAlt />
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Index;
