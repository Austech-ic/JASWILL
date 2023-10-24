import React from 'react'
import Header from '../Header/pages'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import styles from './page.module.css'
import blog from '../../../public/blog.png'
import {AiOutlineHeart,AiTwotoneHeart,AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import { BiComment, BiHeart } from 'react-icons/bi'
import { BsStar, BsStarFill } from 'react-icons/bs'

const page = () => {
  const details = [
    {
      id:1,
      backimage:blog,
      text:"Partnering with Engineers for Innovation & Development",
      textone:"May 6, 2022 ",
      textwo:"20",
      texthree:"2",
      iconone:<AiOutlineHeart className={styles.icon}/>,
      icontwo:<BsStarFill className={styles.icon} />,
      iconthree:<FaComment className={styles.icon} />
    },
    {
      id:2,
      backimage:blog,
      text:"Partnering with Engineers for Innovation & Development",
      textone:"May 6, 2022 ",
      textwo:"20",
      texthree:"2",
      iconone:<AiOutlineHeart className={styles.icon}/>,
      icontwo:<BsStarFill className={styles.icon} />,
      iconthree:<FaComment className={styles.icon} />
    },
    {
      id:3,
      backimage:blog,
      text:"Partnering with Engineers for Innovation & Development",
      textone:"May 6, 2022 ",
      textwo:"20",
      texthree:"2",
      iconone:<AiOutlineHeart className={styles.icon}/>,
      icontwo:<BsStarFill className={styles.icon} />,
      iconthree:<FaComment className={styles.icon} />
    },
    {
      id:4,
      backimage:blog,
      text:"Partnering with Engineers for Innovation & Development",
      textone:"May 6, 2022 ",
      textwo:"20",
      texthree:"2",
      iconone:<AiOutlineHeart className={styles.icon}/>,
      icontwo:<BsStarFill className={styles.icon} />,
      iconthree:<FaComment className={styles.icon} />
    },
    {
      id:5,
      backimage:blog,
      text:"Partnering with Engineers for Innovation & Development",
      textone:"May 6, 2022 ",
      textwo:"20",
      texthree:"2",
      iconone:<AiOutlineHeart className={styles.icon}/>,
      icontwo:<BsStarFill className={styles.icon} />,
      iconthree:<FaComment className={styles.icon} />
    },
    {
      id:6,
      backimage:blog,
      text:"Partnering with Engineers for Innovation & Development",
      textone:"May 6, 2022 ",
      textwo:"20",
      texthree:"2",
      iconone:<AiOutlineHeart className={styles.icon}/>,
      icontwo:<BsStarFill className={styles.icon} />,
      iconthree:<FaComment className={styles.icon} />
    },
  ]
  return (
    <div className={styles.main} id='blogpost'>
      <div className={styles.label}>
        <p>Blog Post</p>
      </div>
      <div className={styles.cont}>
        {
          details.map((item) => (
            <div key={item.id} className={styles.subcont}>

            <div className={styles.picont}>
            <p>{item.pic}</p>
              <p className={styles.text}>{item.text}</p>
              <p className={styles.textone}>{item.textone}</p>
            </div>
              <div className={styles.subred}>
                <div className={styles.icondiv}>
                  <div className={styles.one}>
                  <p >{item.iconone}</p>
                  <p className={styles.num}>{item.textwo}</p>
                  </div>
                  <div className={styles.one}>
                  <p >{item.iconthree}</p>
                  <p className={styles.num} >{item.texthree}</p>
                  </div>
              
                
                </div>
                <div>
                <p>{item.icontwo}</p>
                </div>
                
              </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default page