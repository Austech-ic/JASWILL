import React from 'react'
import styles from './account.module.css'
import Button from '@/Components/Button/button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillDelete } from 'react-icons/ai';
import logone from '../../../../public/bg.png'
import { HiHome,HiOutlineDocumentText,HiOutlineTemplate } from 'react-icons/hi'

const Account = () => {
  const router = useRouter();
  const { id, title, description, image } = router.query;
  
  return (
    <div className={styles.mains}>
    <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Account</p>
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
       <p>Email</p>
       </div>

       <div className={styles.ones}>
       <p>Mobile</p>
       </div>
       
       
       <div className={styles.one}>
       <p>Operations</p>
       </div>
        
       
        
        
       

      </div>
      <div className={styles.subcont}>

        <div className={styles.oness}>
          <p>1</p>
        
        </div>
        <div className={styles.ones}>
         <Image src={logone} alt="Image" width={40} height={40} />
          </div>
          <div className={styles.ones}>
          <p>johndoe@gmail.com</p>
        </div>
        <div className={styles.ones}>
          <p>08164638722</p>
          
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

export default Account