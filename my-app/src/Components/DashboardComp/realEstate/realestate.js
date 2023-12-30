import React, { useState } from 'react';
import styles from './realestate.module.css'
import { HiHome } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';
import Button from '@/Components/Button/button';
import RealModal from '../../DashboardComp/realEstate/Real_modal/index';

const RealEstate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Real Estate / Properties</p>
      </div>

      <Button onClick={openModal} />

      {isModalOpen && <RealModal onClose={closeModal} />}
    </div>
  );
};

export default RealEstate;
