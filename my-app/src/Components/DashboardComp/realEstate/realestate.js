import React,{ useState } from 'react'
import styles from './realestate.module.css'
import { HiHome,HiOutlineDocumentText } from 'react-icons/hi'
import {AiOutlineHome,AiOutlineInbox,AiFillFileAdd,AiFillSetting, AiOutlinePlus} from 'react-icons/ai'
import { MdCreate, MdOutlineCreateNewFolder,MdIncompleteCircle, MdOutlineSaveAlt, MdSaveAlt } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import Image from 'next/image'


const RealEstate = () => {

  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedMedia(file); // Update state with the selected file
  };

  const showMediaInGallery = () => {
    // Show the selected image inside the div when the "Choose File" label is clicked
    if (selectedMedia) {
      return (
        <div className="mt-3">
          <Image
          width={200}
          height={200}
            src={URL.createObjectURL(selectedMedia)}
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
      <div className={styles.subcont}>
        <div className={styles.contone}>
         <div className={styles.divcont}>
          <label className={styles.label}>Title*</label>
          <input placeholder='Title' className={styles.input} />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Description*</label>
          <textarea rows="4" cols="50" className={styles.textarea}>Description</textarea>
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Content*</label>
          <textarea rows="4" cols="50" className={styles.textareas}>Description</textarea>
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
                  </div>
         



         <div className={styles.divcont}>
          <label className={styles.label}>City*</label>
          <input placeholder='city' className={styles.input} />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Property Location*</label>
          <input placeholder='property Location' className={styles.input} />
         </div>
         <div className={styles.twocont}>
         <div className={styles.divcont}>
          <label className={styles.label}>Number of bedrooms*</label>
          <input placeholder='Number of bedrooms' className={styles.input} />
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Number of bathrooms*</label>
          <input placeholder='Number of bathrooms' className={styles.input} />
         </div>
         </div>
         <div className={styles.twocont}>
         
         <div className={styles.divcont}>
          <label className={styles.label}>Number of floors*</label>
          <input placeholder='Number of floors' className={styles.input} />
         </div>
         </div>
         <div className={styles.divcont}>
          <label className={styles.label}>Type*</label>
          <input placeholder='For Sale' className={styles.input} />
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
            <button className={styles.buttontwo}>
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




    </div>
  )
}

export default RealEstate