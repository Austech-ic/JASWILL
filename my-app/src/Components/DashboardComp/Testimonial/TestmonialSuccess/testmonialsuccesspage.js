import React from 'react';
import styles from './testmonialsuccess.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/Component/Button/button';
import { AiFillDelete } from 'react-icons/ai';

const TestmonialSuccesspage = () => {

  const router = useRouter();
  const { id, name, comment, image } = router.query;


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
       <p>Name</p>
       </div>

       <div className={styles.ones}>
       <p>Comment</p>
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
          <p>{name}</p>
        </div>
        <div className={styles.one}>
          <p>{comment}</p>
          
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

export default TestmonialSuccesspage;