import React, { useState } from 'react';
import { MdSaveAlt } from 'react-icons/md';
import styles from './modal.module.css';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { createBlogPost } from '@/library/request';
import { format } from 'date-fns';  // Import the format function
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Modal = ({ handleClose, show, children, setCounter }) => {
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
  const [descriptionError, setDescriptionError] = useState('');


  const [formData, setFormData] = useState({
    title: '',
    desccription: '',
    createdOn: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"), // Format the current date
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
    setDescriptionError('');
  
    if (!formData.title) {
      setTitleError('Please enter a title.');
    }
  
    if (!ImageUrl) {
      setImageError('Please upload an image.');
    }
  
    if (!formData.desccription) {
      setDescriptionError('Please enter a description.');
    }
  
    // If any of the requirements is not met, return without saving
    if (!formData.title || !ImageUrl || !formData.desccription) {
      return;
    }
  
    const formValues = new FormData();
    formValues.append('ImageUrl', ImageUrl);
    formValues.append('Title', formData.title);
    formValues.append('Desccription', formData.desccription);
    formValues.append('CreatedOn', formData.createdOn);
  
    try {
      setIsFormDisabled(true); // Disable form elements
      setIsOpacityTimeoutSet(true); // Set the flag to indicate timeout is set

      createBlogPost('Blog/CreateBlog', formValues).then((response) => {
        toast({
          title: 'Blog Created Successfully',
          description: 'You created a blog.',
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
          desccription: '',
          createdOn: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
        });
        setImageUrl(null);
        setImage(null);
      }).catch((error) => console.log(error));
    } catch (error) {
      console.error('Upload failed!', error);
    } finally {
      setIsFormDisabled(false); // Re-enable form elements
      setTimeout(() => {
        setIsOpacityTimeoutSet(false); // Clear the flag after 10 seconds
      }, 10000);
    }

  };
  

  const showMediaInGallery = () => {
    if (ImageUrl) {
      return (
        <div className="mt-3">
          <Image
            width={50}
            height={50}
            src={image || ''}
            alt="Selected Thumbnail"
            className={styles.image}
          />
        </div>
      );
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

            <div className={styles.divcont}>
              <label className={styles.label}>Comment/Description*</label>
              {descriptionError && <div className={styles.errorMessage}>{descriptionError}</div>}
              <textarea
                rows="4"
                cols="50"
                className={styles.textarea}
                value={formData.desccription}
                required
                onChange={(e) => setFormData({ ...formData, desccription: e.target.value })}
              />
            </div>

            <div className={styles.divcont}>
              <label htmlFor="file-upload" className={styles.upload}>
                {showMediaInGallery()}
                <input
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                  style={{ display: 'block' }}
                  id="file-upload"
                />
              </label>
              {imageError && <div className={styles.errorMessage}>{imageError}</div>}
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

export default Modal;
