import styles from './footer.module.css'
import Image from 'next/image'
import Googleplay from '../../../../../public/img/googleplay.png'
import Appstore from '../../../../../public/img/AppStore.png'
import Bar from '../../../../../public/img/bar.jpeg'
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
        <p>Get 10% off your first order</p>
        <div className={styles.inputcont}>
        <input type="text" 
        placeholder='Enter your email' 
        className={styles.input}/>
        <AiOutlineSend className={styles.icon}/>
        </div>
       
        </div>
       
       </div>
       <div className={styles.subone}>
        <p className={styles.label}>Support</p>
       <div className={styles.subcont}>
       <p>Suite 11 Zee mall,News Engineering,Dawaki</p>
        <p>skylinetech@gmail.com</p>
        <p>+234-916-282-8400</p>
       </div>
       </div>
       <div className={styles.subone}>
        <p className={styles.label}>Account</p>
        <div className={styles.subcont}>
       <p>My Account</p>
       <Link href={`/signup`} className={styles.link}>
        <p>Login / Register</p>
        </Link>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
       </div>
       </div>
       <div className={styles.subone}>
        <p className={styles.label}>Quick Link</p>
        <div className={styles.subcont}>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <Link href={`/contactus`} className={styles.link}>
        <p>Contact</p>
        </Link>
        </div>
       </div>
       <div className={styles.subone}>
        <p className={styles.label}>Download App</p>
        <div className={styles.subcont}>
            <p className={styles.texts}>Save $3 with App New User Only</p>
            <div className={styles.lastcont}>
                <div className={styles.cont} >
                    <div className={styles.barcont}>
                    <Image src={Bar} alt='bar-img'  className={styles.img} />
                    </div>
                   
                    <div className={styles.googlecont}>
                    <Image src={Googleplay} alt='google-img' className={styles.img}/>
                    <Image src={Appstore} alt='bar-img'   className={styles.img}/>
                    </div>
                </div>
                <div className={styles.socialcont}>
                    <TiSocialFacebook className={styles.icons}/>
                    <CiTwitter className={styles.icons} />
                    <AiOutlineInstagram className={styles.icons} />
                    <LiaLinkedinIn className={styles.icons} />
                </div>
            </div>
        </div>
       </div>

        </div>
    )
}
export default Footer;