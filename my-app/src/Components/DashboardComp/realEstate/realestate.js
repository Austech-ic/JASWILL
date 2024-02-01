import React, { useState } from 'react';
import styles from './realestate.module.css'
import { HiHome } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';
import Button from '@/Components/Button/button';
import RealModal from '../../DashboardComp/realEstate/Real_modal/index';
import Real_success from '../../DashboardComp/realEstate/Real_success/page'

const RealEstate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counter, setCounter] = useState(1)


  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

 
 

  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Real Estate / Properties</p>
      </div>

      
      <Button onClick={openModal} />
      <div className=''>
        <RealModal className='' setCounter={setCounter} show={isModalOpen} handleClose={openModal}/>
      </div>
      <Real_success counter={counter}  />
      
       
        
    </div>
  );
};

export default RealEstate;
