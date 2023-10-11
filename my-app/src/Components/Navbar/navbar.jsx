import styles from './navbar.module.css'
import {AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import { IoIosMenu } from 'react-icons/io';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenuContent, setShowMenuContent] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setShowMenuContent(!showMenuContent);
    }





    return(
        <div className={styles.main}>
           <div className={styles.textcont}>
           <p className={styles.bold} id="animatedText">Skyline</p>
            <div>
            <IoIosMenu className={styles.menuicon}
            onClick={handleMenuClick} />
            </div>
            </div>
            
            {showMenuContent && (
          <div className={styles.mobilelistcont}>
          <ul className={styles.mobilelist}>
              <li className={styles.item}>
                <Link href={`/`} className={styles.link}>
                Home
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/contactus`} className={styles.link}>
                Contact
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/aboutus`} className={styles.link}>
                About
                </Link>
               </li>
              <li className={styles.item}>
              <Link href={`/signup`} className={styles.link}>
                Sign Up
                </Link>
                </li>
          </ul>
         </div>
        )}
          
          
           <div className={styles.listcont}>
            <ul className={styles.list}>
            <li className={styles.item}>
                <Link href={`/`} className={styles.link}>
                Home
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/contactus`} className={styles.link}>
                Contact
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/aboutus`} className={styles.link}>
                About
                </Link>
               </li>
               <li className={styles.item}>
              <Link href={`/signup`} className={styles.link}>
                Sign Up
                </Link>
                </li>
            </ul>
           </div>

           <div className={styles.lastcont}>
            <div className={styles.searchcont}>
                <input type="text"
                placeholder='what are you looking for ?'
                className={styles.inputcont} />
                <AiOutlineSearch className={styles.icon} />
            </div>
            <div className={styles.sublast}>
            <AiOutlineHeart className={styles.icon} />
            <AiOutlineShoppingCart className={styles.icon} />

            </div>
          
           </div>

        </div>
    )
}
export default Navbar;