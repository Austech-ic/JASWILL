import React,{ useState } from 'react'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle, MdOutlineSaveAlt, MdSaveAlt } from 'react-icons/md'
import styles from './testmodal.module.css';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid'; 
import Image from 'next/image';


const TestModal = ({ handleClose, show, children }) => {
  const [idCounter, setIdCounter] = useState(1);

  const router = useRouter()
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  const [selectedMedia, setSelectedMedia] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    image: null,
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedMedia(file);
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };


  const handleSave = () => {
    // Check if the form data is empty
    if (!formData.name || !formData.comment || !formData.image) {
      setErrorMessage('Please fill in all fields and upload an image.');
      return;
    }
    setErrorMessage('');

     const reader = new FileReader();
    reader.onload = () => {
      const id = idCounter; // Use the current counter value as the ID
      setIdCounter((prevCounter) => prevCounter + 1); // Increment the counter for the next ID

      router.push({
        pathname: '/dashboard/testimonialsuccess',
        query: { ...formData, image: reader.result, id },
      });
    };
    reader.readAsDataURL(formData.image);

    
  };

  const showMediaInGallery = () => {
    // Show the selected image inside the div when the "Choose File" label is clicked
    if (selectedMedia) {
      return (
        <div className="mt-3">
          <Image
          width={50}
          height={50}
            src={URL.createObjectURL(selectedMedia)}
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
        <div className={styles.contone}>
        <div className={styles.divcont}>
          <label className={styles.label}>Name*</label>
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          <input placeholder='Name' 
          className={styles.input}
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
         </div>

         <div className={styles.divcont}>
          <label className={styles.label}>Comment*</label>
        
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          <textarea rows="4" cols="50" 
          className={styles.textarea}
           value={formData.comment}
           required
           onChange={(e) => setFormData({ ...formData, comment: e.target.value })}/>
         </div>
         <div className={styles.divcont}>
                    
         <label htmlFor="file-upload" className={styles.upload}>
         
          
          {showMediaInGallery()}
          <input
            type="file"
            onChange={handleFileUpload}
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
      
      </section>
    </div>
  );
};

export default TestModal;
