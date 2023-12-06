import React, { useState } from 'react';
import styles from './blog.module.css';
import { HiHome } from 'react-icons/hi';
import Button from '../../Button/button';
import Modal from '../../Modal/modal';

const Blog = () => {
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
        <p>Dashboard / Blog</p>
      </div>
      <Button onClick={handleOpenModal} />
      <div>
        <Modal show={showModal} handleClose={handleCloseModal}/>
      </div>
    </div>
  );
};

export default Blog;
