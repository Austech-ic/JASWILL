import React from 'react'
import styles from './Staticblock.module.css'
import Button from '@/Components/Button/button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillDelete } from 'react-icons/ai';
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'


const StaticBlock = () => {
  const router = useRouter();
  const { id, title, description, image } = router.query;

 
  return (
    <div className={styles.mains}>
        <div className={styles.home}>
            <HiHome />
            <p>Dashboard / StaticBlock</p>
          </div>
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
       <p>Date</p>
       </div>

       <div className={styles.ones}>
       <p>Status</p>
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
       </div>
  )
}

export default StaticBlock