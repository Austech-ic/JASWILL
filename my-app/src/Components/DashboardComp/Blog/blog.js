import React, { useState } from 'react';
import styles from './blog.module.css';
import { HiHome } from 'react-icons/hi';
import Button from '../../Button/button';
import Success from './Success/successpage'
import Modal from '../../Modal/modal';

const Blog = () => {
  const [showModal, setShowModal] = useState(false);

  const [counter, setCounter] = useState(1)

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  

  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Blog</p>
      </div>
      <Button onClick={handleOpenModal} />
      <div>
        <Modal setCounter={setCounter} show={showModal} handleClose={handleOpenModal}/>
      </div>
      <Success counter={counter} />
      
    </div>
  );
};

export default Blog;
