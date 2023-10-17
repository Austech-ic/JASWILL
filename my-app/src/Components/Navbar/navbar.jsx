import styles from './navbar.module.css'
import {AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import { IoIosMenu,IoMdCall } from 'react-icons/io';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logone from '../../../public/logo.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenuContent, setShowMenuContent] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setShowMenuContent(!showMenuContent);
    }


    return(

        <div className={styles.main} 
        >
           <div className={styles.textcont}>
            <div className={styles.imgcont}>
            <Image src={logone} alt='logo-img' className={styles.img}/>
            </div>
           
            <div className={styles.menucont}>
            <IoIosMenu className={styles.menuicon}
            onClick={handleMenuClick} />
            </div>
            </div>

            {/* mobile */}
            
            {showMenuContent && (
          <div className={styles.mobilelistcont}>
          <ul className={styles.mobilelist} >
              <li className={styles.item} >
                <Link href={`/`} className={styles.link}>
               Home
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/services`} className={styles.link}>
                Services
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/`} className={styles.link}>
               Our Properties
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/career`} className={styles.link}>
             Career
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/contact`} className={styles.link}>
             Contact us
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/blogpage`} className={styles.link}>
            Blog
                </Link>
               </li>
                <li className={styles.item}>
              <Link href={`/signup`} className={styles.link}>
                <div className={styles.buttoncont}>
                <button className={styles.button}>Sign Up/Log in</button>
              
                </div>
              
                </Link>
                </li>
                
          </ul>
         </div>
        )}

          {/* desktop */}
          
           <div className={styles.listcont}>
            <ul className={styles.list}>
            <li className={styles.item}>
                <Link href={`/`} className={styles.link}>
                Home
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/services`} className={styles.link}>
                Services
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/`} className={styles.link}>
                Our Properties
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/career`} className={styles.link}>
             Career
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/contact`} className={styles.link}>
             Contact us
                </Link>
               </li>
               <li className={styles.item}>
                <Link href={`/blogpage`} className={styles.link}>
            Blog
                </Link>
               </li>
                <li className={styles.item}>
              <Link href={`/signup`} className={styles.link}>
                <div className={styles.buttoncont}>
                <button>Sign Up/Log in</button>
              
                </div>
              
                </Link>
                </li>
            </ul>
           </div>

         
        </div>
    )
}
export default Navbar;