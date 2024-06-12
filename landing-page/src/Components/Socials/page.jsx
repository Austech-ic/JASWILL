import React from 'react'
import styles from './page.module.css'
import {AiOutlineSend,AiOutlineInstagram} from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
import {CiTwitter} from 'react-icons/ci'
import {LiaLinkedinIn} from 'react-icons/lia'
import Link from 'next/link'


const page = () => {
  return (
    <div className={styles.main}>
         <div className={styles.socialcont}>
            <Link href={`/`}>
            <TiSocialFacebook className={styles.icons}/>
            </Link>
            <Link href={`/`}>
            <CiTwitter className={styles.icons} />
            </Link>
            <Link href={`/`}>
            <AiOutlineInstagram className={styles.icons} />
            </Link>
            <Link href={`/`}>
            <LiaLinkedinIn className={styles.icons} />
            </Link>
                    
                   
                    
                    
                </div>

                <div className={styles.socialcont}>
                    <Link href={`/`}>
                    <p className={styles.texts}>Privacy Policy</p>
                    </Link>
                    <Link href={`/`}>
                    <p className={styles.texts}>Terms of Service</p>
                    </Link>
                    <Link href={`/`}>
                    <p className={styles.texts}>Help/FAQ</p>
                    </Link>
                  
                  
                  
                </div>
    </div>
  )
}

export default page