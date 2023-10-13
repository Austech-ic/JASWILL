import styles from './footer.module.css'
import Image from 'next/image'
import Googleplay from '../../../public/googlenew.png'
import Appplay from '../../../public/new.png'
import aisen from '../../../public/aisen.png'
import apen from '../../../public/apen.png'
import iso from '../../../public/iso.png'
import Bar from '../../../public/newscan.png'
import {AiOutlineSend,AiOutlineInstagram} from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
import {CiTwitter} from 'react-icons/ci'
import {LiaLinkedinIn} from 'react-icons/lia'
import Link from 'next/link'




const Footer = () => {
 
    return(
        <div className={styles.main}>
       <div className={styles.subone}>
        <p className={styles.label}>Subscribe</p>
        <div className={styles.subcont}>
        <p>Jaswill leverages the best in-class teachers, media, and technology to create high-quality, affordable and accessible education for students.</p>   
        </div>
       
       </div>
       <div className={styles.subone}>
        <p className={styles.label}>Company</p>
       <div className={styles.subcont}>
       <Link href={`/`} className={styles.link}>
        <p>Blog</p>
        </Link>
       </div>
       </div>
       <div className={styles.subone}>
        <p className={styles.label}>Socials</p>
        <div className={styles.subcont}>
        <Link href={`/`} className={styles.link}>
        <p>Linkedin</p>
        </Link>
       <Link href={`/`} className={styles.link}>
        <p>Youtube</p>
        </Link>
        <Link href={`/`} className={styles.link}>
        <p>Twitter</p>
        </Link>
        <Link href={`/`} className={styles.link}>
        <p>Facebook</p>
        </Link>
        <Link href={`/`} className={styles.link}>
        <p>Instragram</p>
        </Link>
       </div>
       </div>
     
       <div className={styles.subone}>
        <p className={styles.label}>Download App</p>
        <div className={styles.subcont}>
            <div className={styles.lastcont}>
                <div className={styles.conts} >
                    <div className={styles.barconts}>
                        <p>Certifications</p>
                    <Image src={iso} alt='bar-img'  className={styles.imgs} />
                    </div>
                   
                    <div className={styles.googleconts}>
                    <Image src={apen} alt='google-img' className={styles.imgs}/>
                    <Image src={aisen} alt='bar-img'   className={styles.imgs}/>
                    </div>
                </div>
             
            </div>
        </div>
       </div>

       <div className={styles.subone}>
        <p className={styles.label}>Download App</p>
        <div className={styles.subcont}>
            <div className={styles.lastcont}>
                <div className={styles.cont} >
                    <div className={styles.barcont}>
                    <Image src={Bar} alt='bar-img'  className={styles.img} />
                    </div>
                   
                    <div className={styles.googlecont}>
                    <Image src={Googleplay} alt='google-img' className={styles.img}/>
                    <Image src={Appplay} alt='bar-img'   className={styles.img}/>
                    </div>
                </div>
               
            </div>
        </div>
       </div>

        </div>
    )
}
export default Footer;