import React, { useState } from 'react';
import styles from './testimonialcomp.module.css'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'
import TestModal from '../../TestimonyModal/testmodal';
import TestmonialSuccesspage from './TestmonialSuccess/testmonialsuccesspage';
import TestimonialButton from '../../DashboardComp/Testimonial/TestimonialButton/page'

const TestimonialComp = () => {

  const [showModal, setShowModal] = useState(false);

  const [counter, setCounter] = useState(1)

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

 
 
  return (
    <div className={styles.main}>
    <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Testimonial</p>
      </div>
      <TestimonialButton onClick={handleOpenModal} />
      <div>
        <TestModal setCounter={setCounter} show={showModal} handleClose={handleOpenModal}/>
      </div>
      <TestmonialSuccesspage counter={counter} />

   </div>
  )
}

export default TestimonialComp