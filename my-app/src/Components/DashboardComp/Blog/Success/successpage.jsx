import React from 'react';
import styles from './success.module.css'
import Image from 'next/image';
import logo from '../.../../../../../../public/brand/bg.png'
import { useRouter } from 'next/router';

import { AiFillDelete } from 'react-icons/ai';
import Button from '@/Components/Button/button';

const Successpage = () => {

  const router = useRouter();
  const { id, title, description, image } = router.query;


  return (
    // <div className={styles.main}>
    //   {/* <Button /> */}
    //   <div className={styles.cont}>
    //   <div className={styles.subcontone}>

    //   <div className={styles.oness}>
    //    <p>Id</p>
    //    </div>

    //    <div className={styles.ones}>
    //      <p>Image</p>
    //    </div>

    //    <div className={styles.ones}>
    //    <p>Title</p>
    //    </div>

    //    <div className={styles.ones}>
    //    <p>Description</p>
    //    </div>

    //    <div className={styles.ones}>
    //    <p>Operations</p>
    //    </div>






    //   </div>
    //   <div className={styles.subcont}>
    //     <div className={styles.oness}>
    //       <p>{id}</p>
    //     </div>
    //     <div className={styles.one}>
    //       {image && <Image src={image} alt="Image" width={40} height={40} />}
    //       </div>
    //       <div className={styles.one}>
    //       <p>{title}</p>
    //     </div>
    //     <div className={styles.one}>
    //       <p>{description}</p>

    //     </div>
    //     <div className={styles.one}>
    //     {/* AiFillDelete */}
    //     <AiFillDelete color='red' />

    //       </div>





    //   </div>
    //   </div>

    // </div>
<div className='bg-white py-[50px]'>
  <table className='table-auto w-full'>
    <thead className='bg-red-400 mb-[4rem] '>
      <tr>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <input type="checkbox" />
        </th>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Id</p>
        </th>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Image</p>
        </th>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Name</p>
        </th>
        <th className='w-1/5'> {/* Adjust the width as needed */}
          <p className='text-center'>Operation</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className='text-center'>
          <input type="checkbox" />
        </td>
        <td className='text-center'>
          <p>1</p>
        </td>
        <td className='text-center'>
          <div className='h-[3rem] w-[10rem]'>
            {/* Assuming 'logo' is the variable for your image source */}
            <Image src={logo} alt='pic' className='w-full h-full object-cover' />
          </div>
        </td>
        <td className='text-center'>
          <p>Lugbe House</p>
        </td>
        <td className='text-center mx-auto'>
  {/* Assuming you're using React Icons for the delete icon */}
  <AiFillDelete color='red' className='text-center' style={{ display: 'block', margin: 'auto' }} />
</td>

      </tr>
    </tbody>
  </table>
</div>

  );
};

export default Successpage;