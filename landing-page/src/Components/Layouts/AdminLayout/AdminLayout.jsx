"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../DashboardComp/sidebar/sidebar';
import DashboardHeader from '../../DashboardComp/dashboardheader/dashboardheader';
import Footer from '../../Footer/footer';
import styles from './AdminLayout.module.css';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { LiaYoutubeSquare } from 'react-icons/lia';
import Head from "next/head";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const user = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const title = "JASWILL_Admin Dashboard";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const isDashboardPage = router && router.pathname && router.pathname.includes("/dashboard");

  
  // useEffect(() => {
  //   // Check user and redirect if necessary
  //   if (!user) {
  //     router.push('/signup');
  //   }
  // }, [user, router]);
  // console.log('router')

  return (
    <div className={`${styles.maincont} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <Head>
      <title>{title}</title>
      </Head>
         <div className={styles.menu}>
          <button className={styles.button} onClick={toggleMenu}>
            <HiOutlineMenuAlt1 className={styles.icon} />
            Menu
          </button>
        </div>
        <div className={styles.head}>
        <DashboardHeader />
        </div>
        <hr />

        <div className={`${styles.subcont} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <div
            className={`${styles.subcontone} ${isMenuOpen ? styles.menuOpen : ''}`}
          >
  
           
  {/* {
  router && router.pathname && router.pathname.includes("/dashboard") && <Sidebar closeMenu={closeMenu} />
  } */}
  <Sidebar closeMenu={closeMenu} />

    
            
  
          </div>
          <hr className={styles.line} />
  
          <div
            className={`${styles.subcontwo} ${isMenuOpen ? styles.menuClosed : ''}`}
          >
            {children}
          </div>
        </div>


        <hr />
      <Footer />
    </div>
  );
};

export default AdminLayout;
