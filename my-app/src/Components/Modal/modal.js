import React, { useState } from 'react'
import { MdCreate, MdOutlineCreateNewFolder, MdIncompleteCircle, MdOutlineSaveAlt, MdSaveAlt } from 'react-icons/md'
import styles from './modal.module.css';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { createBlogPost } from '@/library/request';
import { postRequest } from '@/library/request'
import { useToast } from '@chakra-ui/react';
import axios from "axios"



const Modal = ({ handleClose, show, children }) => {
  
  const [idCounter, setIdCounter] = useState(1);


  const router = useRouter()
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  const [ImageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);


  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    // contentName: 'Blogone',
    title: '',
    
  });

  // console.log(imageUrl)
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
    setImageUrl (file)

    if(file) {
      const reader = new FileReader();
      reader.onloadend =() => {
        setImage(reader.result);

      };
      reader.readAsDataURL(file);
    


    }
   }



  const handleSave = (e) => {
    // Check if the form data is empty
    e.preventDefault();
    // if (!formData.title || !formData.contentName || !imageUrl) {
    if (!formData.title ||  !ImageUrl) {
      setErrorMessage('Please fill in all fields and upload an image.');
      return;
    }
    setErrorMessage('');

    
  const formValues = new FormData();
  formValues.append('ImageUrl', ImageUrl);
  formValues.append('Title', formData.title);

    try {
    createBlogPost("Blog/CreateBlog",formValues).then((response) => {
      toast({
        title: 'Blog Created Successful',
        description: 'You a blog.',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
      router.push('/success');
    }).catch((error) => console.log(error));

      // Handle success
    } catch (error) {
      // Handle error
      console.error('Upload failed!', error);
    }

   
// postReq/uest("Blog/CreateBlog", payload).then((data)=>console.log(data)).catch((err)=>console.log(err))
  };


  const showMediaInGallery = () => {
    // Show the selected image inside the div when the "Choose File" label is clicked
    if (ImageUrl) {
      return (
        <div className="mt-3">
          <Image
            width={50}
            height={50}
            src={image || ""}
            alt="Selected Thumbnail"
            className={styles.image}
          />
        </div>
      );
    }
  };

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section className={styles.modalMain}>
        {children}
        <form>
          <div className={styles.contone}>
            <div className={styles.divcont}>
              <label className={styles.label}>Title*</label>
              {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
              <input placeholder='Title'
                className={styles.input}
                value={formData.title}
                required
                onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>

            {/* <div className={styles.divcont}>
              <label className={styles.label}>Comment/Description*</label>

              {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
              <textarea rows="4" cols="50"
                className={styles.textarea}
                value={formData.description}
                required
                onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            </div> */}
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
              {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
            </div>

            <div className={styles.buttonconts}>
              <button className={styles.buttontwo} onClick={handleSave}>
                <MdSaveAlt />
                Save</button>
            </div>
          </div>
        </form>

      </section>
    </div>
  );
};

export default Modal;
