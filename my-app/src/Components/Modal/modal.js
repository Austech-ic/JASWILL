import React, { useState } from 'react'
import { MdCreate, MdOutlineCreateNewFolder, MdIncompleteCircle, MdOutlineSaveAlt, MdSaveAlt } from 'react-icons/md'
import styles from './modal.module.css';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { createBlogPost } from '@/library/request';



const Modal = ({ handleClose, show, children }) => {
  
  const [idCounter, setIdCounter] = useState(1);

  const router = useRouter()
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  const [imageUrl, setImageUrl] = useState(null);

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
    console.log(file)
    if(file) {
      const reader = new FileReader();
      reader.onloadend =() => {
        setImageUrl(reader.result);

      };
      reader.readAsDataURL(file);
    


    }
   }


  const handleSave = (e) => {
    // Check if the form data is empty
    e.preventDefault();
    // if (!formData.title || !formData.contentName || !imageUrl) {
    if (!formData.title ||  !imageUrl) {
      setErrorMessage('Please fill in all fields and upload an image.');
      return;
    }
    setErrorMessage('');

    // const reader = new FileReader();
    // reader.onload = () => {
    //   const id = idCounter; // Use the current counter value as the ID
    //   setIdCounter((prevCounter) => prevCounter + 1); // Increment the counter for the next ID

    //   router.push({
    //     pathname: '/admin/dashboard/success',
    //     query: { ...formData, image: reader.result, id },
    //   });
    // };
    // reader.readAsDataURL(formData.image);
   const payload = {
    title:formData.title,
    imageUrl,
    
   }

   co

console.log(payload)
createBlogPost(payload).then((data)=>console.log(data)).catch((err)=>console.log(err))
  };


  const showMediaInGallery = () => {
    // Show the selected image inside the div when the "Choose File" label is clicked
    if (imageUrl) {
      return (
        <div className="mt-3">
          <Image
            width={50}
            height={50}
            src={imageUrl || ""}
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
