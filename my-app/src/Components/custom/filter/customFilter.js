import React, { Fragment, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {IoIosLocate} from 'react-icons/io'
import styles from '../filter/css/custom.module.css'
import Future from '../../Future/future'

const customFilter = () => {
  const [showFuture, setShowFuture] = useState(false);
  const [saleOption, setSaleOption] = useState('Sale'); 
  const [rentOption, setRentOption] = useState('Rent'); // New state for sale option
  const [shortOption, setShortOption] = useState('Short Let'); // New state for sale option

  const handleOpenFuture = () => {
    setShowFuture(true);
  };

  const handleCloseFuture = () => {
    setShowFuture(false);
  };

  const handleSaleClick = () => {
    setSaleOption('Coming Soon');
    handleOpenFuture(); // Show the "Coming Soon" modal
  };

  const handleRentClick = () => {
    setRentOption('Coming Soon');
    handleOpenFuture(); // Show the "Coming Soon" modal
  };
  const handleShortClick = () => {
    setShortOption('Coming Soon');
    handleOpenFuture(); // Show the "Coming Soon" modal
  };


  return (
    <Fragment>
          <div className={styles.mains}>
        <div className={styles.submains}>
        <div className={styles.contones}>

            </div>
            <div className={styles.contwos}>
                
              <p onClick={handleSaleClick}>{saleOption}</p>
                <p onClick={handleRentClick} className={styles.texts}>{rentOption}</p>
                <p onClick={handleShortClick} className={styles.texts}>{shortOption}</p>
            </div>
            <div>
        
      </div>
           
        </div>
    </div>
    <div className={styles.main}>
      <div className={styles.submain}>
       <div className={styles.contone}>
        <div className={styles.iconcont}>
          <p>Sale</p>
          <MdKeyboardArrowDown className={styles.icon} />
        </div>
        <div className={styles.iconcont}>
          <p>Type</p>
          <MdKeyboardArrowDown className={styles.icon} />
        </div>
        <div className={styles.iconcont}>
          <p>Beds</p>
          <MdKeyboardArrowDown className={styles.icon} />
        </div>
        <div className={styles.iconcont}>
          <p>Min Price</p>
          <MdKeyboardArrowDown className={styles.icon}/>
        </div>
        <div className={styles.iconcont}>
          <p>Max Price</p>
          <MdKeyboardArrowDown className={styles.icon} />
        </div>
       </div>
       <div className={styles.contwo}>
       <div className={styles.iconconts}>
        <div className={styles.locationcont}>
        
         <input type="text" placeholder='Location' className={styles.input} />
        </div>
      
        <AiOutlineSearch className={styles.icon} />
        </div>
        <div>
        <BiCart className={styles.carticon} />
        </div>
       </div>
      </div>
    </div>
    {/* <Future show={showFuture} handleClose={handleCloseFuture} /> */}
    </Fragment>
    
  )
}

export default customFilter