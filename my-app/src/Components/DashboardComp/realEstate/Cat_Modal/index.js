import React, { useState } from 'react';
import styles from './modal.module.css';
import { MdSaveAlt } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { createRealEstate } from '@/library/request';
import Button from '@/Components/Button/button';

const Index = ({ handleClose, show, children, setCounter }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;
  const toast = useToast();
  const router = useRouter();

  const [ImageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [categoryNameError, setCategoryNameError] = useState('');

  const [formData, setFormData] = useState({
    description: '',
    categoryname: '',
  });

  const [loading, setLoading] = useState(false);

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
        setImageError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const setFormDataAndClearError = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));

    // Check if the input value is empty and update the corresponding error state
    if (value.trim() === '') {
      switch (key) {
        case 'categoryname':
          setCategoryNameError('Please enter a title.');
          break;
        case 'image':
          setImageError('Please upload an image.');
          break;
        case 'description':
          setDescriptionError('Please enter a description.');
          break;
        default:
          break;
      }
    } else {
      // Clear the corresponding error message if the input is not empty
      switch (key) {
        case 'image':
          setImageError('');
          break;
        case 'description':
          setDescriptionError('');
          break;
        default:
          break;
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setImageError('');
    setCategoryNameError('');
    setDescriptionError('');

    if (!ImageUrl) {
      setImageError('Please upload an image.');
    }

    if (!formData.description) {
      setDescriptionError('Please enter a description.');
    }
    if (!formData.categoryname) {
      setCategoryNameError('Please enter a category.');
    }

    if (!formData.categoryname || !ImageUrl || !formData.description) {
      return;
    }

    const formValues = new FormData();
    formValues.append('ImageUrl', ImageUrl);
    formValues.append('Description', formData.description);
    formValues.append('CategoryName', formData.categoryname);

    try {
      setLoading(true); // Set loading state to true when Save button is clicked
      await createRealEstate('Category/CreateCategory', formValues).then((response) => {
        toast({
          title: 'A Category has been created successfully',
          description: 'You added a new category.',
          status: 'success',
          position: 'top',
          duration: 1000,
          isClosable: true,
        });

        setCounter((prev) => prev + 1);
        handleClose();

        // Clear all form fields after successful save
        setFormData({
          description: '',
          categoryname: '',
        });

        setImageUrl(null);
        setImage(null);
        console.log(formData);
      }).catch((error) => console.log(error));
    } catch (error) {
      console.error('Upload failed!', error);
    } finally {
      setLoading(false); // Reset loading state to false after the save operation is complete
    }
  };

  const showMediaInGallery = () => {
    if (ImageUrl) {
      return (
        <div className="mt-3">
          <Image
            style={{ maxWidth: '100%', maxHeight: '100%' }}
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
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section>
        {children}
        <form className=' h-[70vh] lg:h-[80vh] xl:h-[70vh]'>
          <div>
            <div>
              <div className={styles.divcont}>
                <label className={styles.label}>Category*</label>
                {categoryNameError && <div className={styles.errorMessage}>{categoryNameError}</div>}
                <select
                  value={formData.categoryname}
                  required
                  onChange={(e) => setFormDataAndClearError('categoryname', e.target.value)}
                  className={styles.input}
                >
                  <option></option>
                  <option>Apartment</option>
                  <option>Office</option>
                  <option>Gym</option>
                  <option>Hall</option>
                </select>
              </div>

              <div className={styles.divcont}>
                <label className={styles.label}>Description*</label>
                {descriptionError && <div className={styles.errorMessage}>{descriptionError}</div>}
                <textarea
                  rows="4"
                  cols="50"
                  className={styles.textarea}
                  value={formData.description}
                  required
                  onChange={(e) => setFormDataAndClearError('description', e.target.value)}
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
                  className={styles.buttontwo}
                  onClick={handleSave}
                  disabled={loading} // Disable the button when loading is true
                >
                  {loading ? <span>Loading...</span> : <MdSaveAlt />}
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Index;
