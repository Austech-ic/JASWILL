import React,{ useState } from 'react'
import styles from './modal.module.css'
import { HiHome,HiOutlineDocumentText } from 'react-icons/hi'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting, AiOutlinePlus} from 'react-icons/ai'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle, MdOutlineSaveAlt, MdSaveAlt } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import Image from 'next/image'
import {useRouter} from "next/router";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import  {createRealEstate} from '@/library/request'
import Button from '@/Components/Button/button'



const Index = ({ handleClose, show,children, setCounter  }) => {
  
    const showHideClassName = show ? styles.displayBlock : styles.displayNone;
    const toast = useToast();
    const router = useRouter();
  
    const [ImageUrl, setImageUrl] = useState(null);
    const [image, setImage] = useState(null);
    const [titleError, setTitleError] = useState('');
    const [imageError, setImageError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [categoryIdError, setCategoryIdError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [contentError, setContentError] = useState('');
    const [cityError, setCityError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [agencyError, setAgencyError] = useState('');
    const [agreementError, setAgreementError] = useState('');
    const [cautionError, setCautionError] = useState('');
    const [serviceChargeError, setServiceChargeError] = useState('');
    const [totalError, setTotalError] = useState('');
    const [typeError, setTypeError] = useState('');
    const [locationError, setLocationError] = useState('');
    const [bedroomError, setBedroomError] = useState('');
    const [bathroomError, setBathroomError] = useState('');
    const [floorError, setFloorError] = useState('');
   
  
  
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      category: '',
      categoryid: '',
      content:'',
      type: '',
      city: '',
      price: '',
      agency: '',
      agreement: '',
      caution: '',
      servicecharge: '',
      total: '',
      propertylocation: '',
      numberofbedrooms: '',
      numberofbathrooms: '',
      numberoffloors: '',
     
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
          case 'title':
            setTitleError('Please enter a title.');
            break;
          case 'image':
            setImageError('Please upload an image.');
            break;
          case 'description':
            setDescriptionError('Please enter a description.');
            break;
            case 'category':
            setCategoryError('Please enter category.');
            break;
            case 'categoryid':
            setCategoryIdError('Please enter category.');
            break;
            case 'content':
              setContentError('Please enter a content.');
            break;
            case 'city':
              setCityError('Please enter city.');
            break;
            case 'propertylocation':
              setLocationError('Please enter a location.');
            break;
            case 'numberofbedrooms':
              setBedroomError('Please enter number of bedrooms.');
            break;
            case 'numberofbathrooms':
              setBathroomError('Please enter number of bathrooms.');
            break;
            case 'numberoffloors':
              setFloorError('Please enter number of floors.');
            break;
            case 'type':
              setTypeError('Please enter type.');
            break;
            case 'price':
              setPriceError('Please enter price.');
            break;
            case 'agency':
              setAgencyError('Please enter agency fee %.');
            break;
            case 'agreement':
              setAgreementError('Please enter agency fee %.');
            break;
            case 'caution':
              setCautionError('Please enter caution fee %.');
            break;
            case 'servicecharge':
              setServiceChargeError('Please enter service charge.');
            break;
            case 'total':
              setCautionError('Please enter overall fees.');
            break;
  
  
          default:
            break;
        }
      } else {
        // Clear the corresponding error message if the input is not empty
        switch (key) {
          case 'title':
            setTitleError('');
            break;
          case 'image':
            setImageError('');
            break;
          case 'description':
            setDescriptionError('');
            break;
          case 'category':
            setCategoryError('');
            break;
            case 'categoryid':
              setCategoryIdError('');
            break;
            case 'content':
              setContentError('');
              break;
              case 'city':
                setCityError('');
                break;
                case 'propertylocation':
                  setLocationError('');
                break;
                case 'numberofbedrooms':
                  setBedroomError('');
                break;
                case 'numberofbathrooms':
                  setBathroomError('');
                break;
                case 'numberoffloors':
                  setFloorError('');
                break;
                case 'type':
                  setTypeError('');
                break;
                case 'price':
                  setPriceError('');
                break;
                case 'agency':
                  setAgencyError('');
                break;
                case 'agreement':
                  setAgreementError('');
                break;
                
                case 'caution':
                  setCautionError('');
                break;
                case 'servicecharge':
                  setServiceChargeError('');
                break;
                case 'total':
                  setTotalError('');
                break;
          // ... other cases for different input fields
          default:
            break;
        }
      }
    };
    
    
  
    const handleSave = (e) => {
      e.preventDefault();
      setTitleError('');
      setImageError('');
      setCategoryError('');
      setCategoryIdError('');
      setDescriptionError('');
      setContentError(''),
      setCityError(''),
      setPriceError(''),
      setAgencyError(''),
      setAgreementError(''),
      setCautionError(''),
      setServiceChargeError(''),
      setTotalError(''),
      setTypeError(''),
      setLocationError(''),
      setBedroomError(''),
      setBathroomError(''),
      setFloorError('')
  
  
        
      if (!formData.title) {
        setTitleError('Please enter a title.');
      }
  
      if (!ImageUrl) {
        setImageError('Please upload an image.');
      }
  
      if (!formData.description) {
        setDescriptionError('Please enter a description.');
      }
      if (!formData.category) {
        setCategoryError('Please enter a category.');
      }
      if (!formData.categoryid) {
        setCategoryIdError('Please enter category id.');
      }
      if (!formData.content) {
        setContentError('Please enter a content.');
      }
      if (!formData.city) {
        setCityError('Please enter city.');
      }
      if (!formData.price) {
        setPriceError('Please enter price.');
      }
      if (!formData.agency) {
        setAgencyError('Please enter agency %.');
      }
      if (!formData.agreement) {
        setAgreementError('Please enter agreement %.');
      }
      if (!formData.caution) {
        setCautionError('Please enter caution fee.');
      }
      if (!formData.servicecharge) {
        setServiceChargeError('Please enter service charge.');
      }
      if (!formData.total) {
        setTotalError('Please enter overall sum in total.');
      }
      if (!formData.propertylocation) {
        setLocationError('Please enter a location.');
      }
      if (!formData.numberofbedrooms) {
        setBedroomError('Please enter number of bedrooms.');
      }
      if (!formData.numberofbathrooms) {
        setBathroomError('Please enter number of bathrooms.');
      }
      if (!formData. numberoffloors) {
        setFloorError('Please enter number of floors.');
      }
      if (!formData.type) {
        setTypeError('Please enter type.');
      }
  
  
      if (!formData.title ||
         !ImageUrl || 
         !formData.description ||
         !formData.category ||
         !formData.categoryid ||
         !formData.content ||
         !formData.city ||
         !formData.price ||
         !formData.agency ||
         !formData.agreement ||
         !formData.caution ||
         !formData.servicecharge ||
         !formData.total ||
         !formData.propertylocation ||
         !formData.numberofbedrooms ||
         !formData.numberofbathrooms ||
         !formData.numberoffloors ||
         !formData.type) {
        return;
      }
      
  
      const formValues = new FormData();
      formValues.append('ImageUrl', ImageUrl);
      formValues.append('Title', formData.title);
      formValues.append('Description', formData.description);
      formValues.append('Category', formData.category);
      formValues.append('CategoryId', formData.categoryid);
      formValues.append('Content', formData.content);
      formValues.append('City', formData.city);
      formValues.append('Price', formData.price);
      formValues.append('Agency', formData.agency);
      formValues.append('Agreement', formData.agreement);
      formValues.append('Caution', formData.caution);
      formValues.append('ServiceCharge', formData.servicecharge);
      formValues.append('Total', formData.total);
      formValues.append('PropertyLocation', formData.propertylocation);
      formValues.append('NumberOfBedrooms', formData.numberofbedrooms);
      formValues.append('NumberOfBathrooms', formData.numberofbathrooms);
      formValues.append('NumberOfFloors', formData.numberoffloors);
      formValues.append('Type', formData.type);
     
  
      try {
        createRealEstate('RealEstate/CreateRealEstate', formValues).then((response) => {
          toast({
            title: 'A Property have been created successfully',
            description: 'You added new property.',
            status: 'success',
            position: 'top',
            duration: 1000,
            isClosable: true,
          });
  
          setCounter((prev) => prev + 1);
        handleClose();
  

        // Clear all form fields after successful save
      setFormData({
        title: '',
        description: '',
        category: '',
        categoryid: '',
        content: '',
        type: '',
        city: '',
        price: '',
        agency: '',
        agreement: '',
        caution: '',
        servicecharge: '',
        total: '',
        propertylocation: '',
        numberofbedrooms: '',
        numberofbathrooms: '',
        numberoffloors: '',
      });

      setImageUrl(null);
      setImage(null);
      console.log(formData)
          
        }).catch((error) => console.log(error));
      } catch (error) {
        console.error('Upload failed!', error);
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
       <section className={styles.modalMain}>
       {children}
        <form>
     <div className={styles.subcont}>
        <div className={styles.contone}>
         <div className={styles.divcont}>
          <label className={styles.label}>Title*</label>
          {titleError && <div className={styles.errorMessage}>{titleError}</div>}
          <input
           placeholder='Title'
           className={styles.input}
           value={formData.title}
           required
           onChange={(e) => setFormDataAndClearError('title', e.target.value)}
           
            />
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
          <label className={styles.label}>Content*</label>
          {contentError && <div className={styles.errorMessage}>{contentError}</div>}
          <textarea rows="4" 
          cols="50" 
          className={styles.textarea}
          value={formData.content}
          required
          onChange={(e) => setFormDataAndClearError('content', e.target.value)}
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
         



         <div className={styles.divcont}>
          <label className={styles.label}>City*</label>
          {cityError && <div className={styles.errorMessage}>{cityError}</div>}
          <input placeholder='city'
           className={styles.input}
           value={formData.city}
           required
           onChange={(e) => setFormDataAndClearError('city', e.target.value)}
            />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Property Location*</label>
          {locationError && <div className={styles.errorMessage}>{locationError}</div>}
          <input 
          placeholder='property Location'
           className={styles.input}
           value={formData.propertylocation}
           required
           onChange={(e) => setFormDataAndClearError('propertylocation', e.target.value)}
            />
         </div>



         <div className={styles.divcont}>
          <label className={styles.label}>Property Category*</label>
          {categoryError && <div className={styles.errorMessage}>{categoryError}</div>}
          <select  
          value={formData.category}
          required
          onChange={(e) => setFormDataAndClearError('category', e.target.value)}
          className={styles.input}>
             <option></option>
          </select>
          
         </div>

         <div className={styles.divcont}>
          <label className={styles.label}>Type*</label>
          {typeError && <div className={styles.errorMessage}>{typeError}</div>}
          <select  
          value={formData.type}
          required
          onChange={(e) => setFormDataAndClearError('type', e.target.value)}
          className={styles.input}>
             <option></option>
            <option>For Sale</option>
          </select>
          
         </div>

         <div className={styles.divcont}>
          <label className={styles.label}>Price*</label>
          {priceError && <div className={styles.errorMessage}>{priceError}</div>}
          <input placeholder='Amount'
           className={styles.input}
           value={formData.price}
           required
           onChange={(e) => setFormDataAndClearError('price', e.target.value)}
            />
         </div>

         {/* <div className={styles.divcont}>
          <label className={styles.label}>Agency Fee*</label>
          {agencyError && <div className={styles.errorMessage}>{agencyError}</div>}
          <input placeholder='Agency fee'
           className={styles.input}
           value={formData.agency}
           required
           onChange={(e) => setFormDataAndClearError('agency', e.target.value)}
            />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Agreement Fee*</label>
          {agreementError && <div className={styles.errorMessage}>{agreementError}</div>}
          <input placeholder='Agreement fee'
           className={styles.input}
           value={formData.agreement}
           required
           onChange={(e) => setFormDataAndClearError('agreement', e.target.value)}
            />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Caution Fee*</label>
          {cautionError && <div className={styles.errorMessage}>{cautionError}</div>}
          <input placeholder='Caution fee'
           className={styles.input}
           value={formData.caution}
           required
           onChange={(e) => setFormDataAndClearError('caution', e.target.value)}
            />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Service Charge*</label>
          {serviceChargeError && <div className={styles.errorMessage}>{serviceChargeError}</div>}
          <input placeholder='Service Charge'
           className={styles.input}
           value={formData.servicecharge}
           required
           onChange={(e) => setFormDataAndClearError('servicecharge', e.target.value)}
            />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Total Fees*</label>
          {totalError && <div className={styles.errorMessage}>{totalError}</div>}
          <input placeholder='Total Fees'
           className={styles.input}
           value={formData.total}
           required
           onChange={(e) => setFormDataAndClearError('total', e.target.value)}
            />
         </div> */}
      


        </div>





        <div className={styles.contwo}>
        <div className={styles.divconts}>
        <label className={styles.label}>Publish*</label>
          <div className={styles.buttonconts}>
          {/* <button className={styles.buttonone}>
            <FaSave />
            Save & exit</button> */}
            <button className={styles.buttontwo} onClick={handleSave}>
          <MdSaveAlt />
            Save</button>
         </div>
        </div>
        {/* <div className={styles.divconts}>
        <label className={styles.label}>Moderation Status*</label>
        <input placeholder='Approved' className={styles.input} />
        </div> */}
        </div>
      </div>
     </form>
       </section>
    </div>
  )
}

export default Index