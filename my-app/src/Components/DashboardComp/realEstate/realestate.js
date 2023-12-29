import React,{ useState } from 'react'
import styles from './realestate.module.css'
import { HiHome,HiOutlineDocumentText } from 'react-icons/hi'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting, AiOutlinePlus} from 'react-icons/ai'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle, MdOutlineSaveAlt, MdSaveAlt } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import Image from 'next/image'
import {useRouter} from "next/router";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import  {createRealEstate} from '@/library/request'




const RealEstate = () => {

  const toast = useToast();
  const router = useRouter();

  const [ImageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [titleError, setTitleError] = useState('');
  const [imageError, setImageError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [contentError, setContentError] = useState('');
  const [cityError, setCityError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [typeError, setTypeError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [bedroomError, setBedroomError] = useState('');
  const [bathroomError, setBathroomError] = useState('');
  const [floorError, setFloorError] = useState('');
 


  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content:'',
    type: '',
    city: '',
    price: '',
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
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setTitleError('');
    setImageError('');
    setDescriptionError('');
    setContentError(''),
    setCityError(''),
    setPriceError(''),
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
    if (!formData.content) {
      setContentError('Please enter a content.');
    }
    if (!formData.city) {
      setCityError('Please enter city.');
    }
    if (!formData.price) {
      setPriceError('Please enter price.');
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
       !formData.content ||
       !formData.city ||
       !formData.price ||
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
    formValues.append('Content', formData.content);
    formValues.append('City', formData.city);
    formValues.append('Price', formData.price);
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
          duration: 3000,
          isClosable: true,
        });

        router.push('/success');

        setCounter((prev) => prev + 1);
        handleClose();
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
    <div className={styles.main}>
      <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Real Estate / Properties</p>
      </div>

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
                value={formData.description}
                required
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
         </div>

         <div className={styles.divcont}>
          <label className={styles.label}>Content*</label>
          {contentError && <div className={styles.errorMessage}>{contentError}</div>}
          <textarea rows="4" 
          cols="50" 
          className={styles.textareas}
          value={formData.content}
          required
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
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
           onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
           onChange={(e) => setFormData({ ...formData, propertylocation: e.target.value })}
            />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Price*</label>
          {priceError && <div className={styles.errorMessage}>{priceError}</div>}
          <input placeholder='price'
           className={styles.input}
           value={formData.price}
           required
           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
         </div>

         <div className={styles.twocont}>
         <div className={styles.divcont}>
          <label className={styles.label}>Number of bedrooms*</label>
          {bedroomError && <div className={styles.errorMessage}>{bedroomError}</div>}
          <input 
          placeholder='Number of bedrooms'
           className={styles.input} 
           value={formData.numberofbedrooms}
           required
           onChange={(e) => setFormData({ ...formData, numberofbedrooms: e.target.value })}
           />
         </div>

         <div className={styles.divcont}>
          <label className={styles.label}>Number of bathrooms*</label>
          {bathroomError && <div className={styles.errorMessage}>{bathroomError}</div>}
          <input placeholder='Number of bathrooms'
           className={styles.input}
           value={formData.numberofbathrooms}
                required
                onChange={(e) => setFormData({ ...formData, numberofbathrooms: e.target.value })}
                 />
         </div>
         </div>
         <div className={styles.twocont}>
         
         <div className={styles.divcont}>
          <label className={styles.label}>Number of floors*</label>
          {floorError && <div className={styles.errorMessage}>{floorError}</div>}
          <input 
          placeholder='Number of floors'
           className={styles.input}
           value={formData.numberoffloors}
                required
                onChange={(e) => setFormData({ ...formData, numberoffloors: e.target.value })}
                 />
         </div>
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Type*</label>
          {typeError && <div className={styles.errorMessage}>{typeError}</div>}
          <input placeholder='For Sale'
           className={styles.input}
           value={formData.type}
                required
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                 />
         </div>
      

         <div className={styles.divcont}>
          <label className={styles.label}>Features*</label>
          <div className={styles.radiocont}>
        <input type="checkbox" id="wifi" value="wifi" name="features" /> 
        <label htmlFor="wifi">Wifi</label>
        <input type="checkbox" id="parking" value="Parking" name="features" />
    <label htmlFor="parking">Parking</label>

    <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features" />
    <label htmlFor="swimmingPool">Swimming Pool</label>

    <input type="checkbox" id="balcon" value="balcon" name="features" />

    <label htmlFor="balcon">Balcony</label>   
      </div>
      <div className={styles.radiocont}>

        <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features" /> 
        <label>Garden</label>

        <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features" /> 
        <label>Security</label>

        <input type="checkbox" id="swimmingPool" 
        value="Swimming Pool" name="features"/> 
        <label>Fitness Center</label>

        <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features"/> 
        <label>Balcony </label>      
      </div>

      <div className={styles.radiocont}>
        <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features" /> 
        <label>Air Condition</label>
        
        <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features" /> 
        <label>Central Heating</label>

        <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features" />
        <label> Laundry Room</label>
      </div>

      <div className={styles.radiocont}>
        <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features" /> 
        <label>Pets Allow</label>

        <input type="checkbox" id="swimmingPool" value="Swimming Pool" name="features" /> 
        <label>Spa & Massage</label>
               
      </div>
        
        
         </div>
         






        </div>





        <div className={styles.contwo}>
        <div className={styles.divconts}>
        <label className={styles.label}>Publish*</label>
          <div className={styles.buttonconts}>
          <button className={styles.buttonone}>
            <FaSave />
            Save & exit</button>
            <button className={styles.buttontwo} onClick={handleSave}>
          <MdSaveAlt />
            Save</button>
         </div>
        </div>
        <div className={styles.divconts}>
        <label className={styles.label}>Moderation Status*</label>
        <input placeholder='Approved' className={styles.input} />
        </div>
        </div>
      </div>
     </form>




    </div>
  )
}

export default RealEstate