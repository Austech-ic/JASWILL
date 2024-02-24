import React, { useState } from 'react';
import styles from './realestate.module.css'
import { HiHome } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';
import ButtonTwo from '@/Components/ButtonTwo/button';
import Button from '@/Components/Button/button';
import CatModal from '../../DashboardComp/realEstate/Cat_Modal/index'
import CatSuccess from '../../DashboardComp/realEstate/Cat_success/page'
import RealModal from '../../DashboardComp/realEstate/Real_modal/index';
import Real_success from '../../DashboardComp/realEstate/Real_success/page'

const RealEstate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [counter, setCounter] = useState(1)


  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const openNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };


 
 

  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Real Estate / Properties</p>
      </div>

      <div>
        {/* <ButtonTwo onClick={openNewModal} /> */}
        <Button onClick={openModal} />
      </div>
      <div className=''>
        <RealModal className='' setCounter={setCounter} show={isModalOpen} handleClose={openModal} />
      </div>
      {/* <CatModal show={isNewModalOpen} handleClose={openNewModal} />
      <CatSuccess counter={counter} /> */}
      <Real_success counter={counter} />
     
    </div>
  );
};

export default RealEstate;
