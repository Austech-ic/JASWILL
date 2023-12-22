import { useState, useEffect } from 'react';
import Navbar from '../../Navbar/navbar'
import Footer from '../../Footer/footer'
import styles from './page.module.css'
import { getRequest } from '@/library/request'
import Image from 'next/image'

const page = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        getRequest("Blog/GetBlog/${id}").then((data) => setBlog(data.data.data)).catch((err) => console.log(err))
      }, [])
      console.log(blog)

  return (
     <div className={styles.main} id='blogpost'>
      <div className={styles.label}>
        <p>Blog Post</p>
      </div>
      <div className={styles.cont}>
        {blog.map((item) => (
          <div key={item.id} className={styles.subcont}>

            <div className={styles.blog}>
              <div className={styles.textdiv}>
                <p className={styles.text}>{item.title}</p>
                <p className={styles.textone}>{item.desccription}
                </p>
                <p className={styles.textone}>{item.createdOn}
                </p>            
              </div>
              
              <div className={styles.imgdiv}>
                <Image src={item.imageUrl} width={1000} height={1000} alt="pic" />
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default page