import React, { useState } from 'react';
import styles from './testimonialcomp.module.css'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'
import Button from '@/Components/Button/button';
import TestModal from '../../TestimonyModal/testmodal';


const TestimonialComp = () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
 
  return (
    <div className={styles.main}>
    <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Testimonial</p>
      </div>
      <Button onClick={handleOpenModal} />
      <div>
        <TestModal show={showModal} handleClose={handleCloseModal}/>
      </div>
   </div>
  )
}

export default TestimonialComp