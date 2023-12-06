import React from 'react';
import styles from './success.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/Component/Button/button';
import { AiFillDelete } from 'react-icons/ai';

const Successpage = () => {

  const router = useRouter();
  const { id, title, description, image } = router.query;


  return (
    <div className={styles.main}>
      <Button />
      <div className={styles.cont}>
      <div className={styles.subcontone}>

      <div className={styles.oness}>
       <p>Id</p>
       </div>

       <div className={styles.ones}>
         <p>Image</p>
       </div>

       <div className={styles.ones}>
       <p>Title</p>
       </div>

       <div className={styles.ones}>
       <p>Description</p>
       </div>
       
       <div className={styles.ones}>
       <p>Operations</p>
       </div>
        
       
        
        
       

      </div>
      <div className={styles.subcont}>
        <div className={styles.oness}>
          <p>{id}</p>
        </div>
        <div className={styles.one}>
          {image && <Image src={image} alt="Image" width={40} height={40} />}
          </div>
          <div className={styles.one}>
          <p>{title}</p>
        </div>
        <div className={styles.one}>
          <p>{description}</p>
          
        </div>
        <div className={styles.one}>
        {/* AiFillDelete */}
        <AiFillDelete color='red' />
            
          </div>





      </div>
      </div>
      
    </div>
  );
};

export default Successpage;