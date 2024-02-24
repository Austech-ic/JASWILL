import React from 'react'
import { AiOutlineHome, AiOutlineInbox, AiFillFileAdd, AiFillSetting } from 'react-icons/ai'
import { BiMessageSquareCheck } from 'react-icons/bi'
import { HiOutlineDocumentText, HiOutlineTemplate } from 'react-icons/hi'
import { MdPublic, MdOutlineFax } from 'react-icons/md'
import { IoMdAddCircleOutline } from 'react-icons/io'
import Link from 'next/link';
import { MdContactPhone } from "react-icons/md";
import styles from './sidebar.module.css'
import { RiServiceLine } from 'react-icons/ri';
import { FaTools } from 'react-icons/fa';
import { TbListDetails } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";


const Sidebar = ({ closeMenu }) => {
 
  const handleMenuItemClick = () => {
    // Close the menu when any menu item is clicked
    closeMenu();

  }
  const details = [
    {
      id: 1,
      icon: <AiOutlineHome className={styles.icon} />,
      title: "Dashboard",
      link: "/admin/dashboard",
      path: "/admin/dashboard",

    },
    {
      id: 2,
      icon: <BiSolidCategoryAlt className={styles.icon} />,
      title: "Property Category",
      link: "/admin/category",
      path: "/admin/category",
    },
    {
      id: 3,
      icon: <AiOutlineInbox className={styles.icon} />,
      title: "Property",
      link: "/admin/real_estate",
      path: "/admin/real_estate",
    },
   
    {
      id: 4,
      icon: <BiMessageSquareCheck className={styles.icon} />,
      title: "Blog",
      link: "/admin/blog",
      path: "/admin/blog",
    },
    {
      id: 5,
      icon: <HiOutlineDocumentText className={styles.icon} />,
      title: "Testimonial",
      link: "/admin/testimonial",
      path: "/admin/testimonial",
    },
    {
      id: 6,
      icon: <MdDesignServices className={styles.icon} />,
      title: "Services",
      link: "/admin/testimonial",
      path: "/admin/testimonial",
    },
    {
      id: 7,
      icon: <MdContactPhone className={styles.icon} />,
      title: "Contact",
      link: "/admin/testimonial",
      path: "/admin/testimonial",
    },
    {
      id: 8,
      icon: <TbListDetails className={styles.icon} />,
      title: "About",
      link: "/admin/testimonial",
      path: "/admin/testimonial",
    },
    {
      id: 8,
      icon: <HiOutlineTemplate className={styles.icon} />,
      title: "Account",
      link: "/admin//account",
      path: "/admin/account",
    },
    {
      id: 9,
      icon: <MdPublic className={styles.icon} />,
      title: "Static Blocks",
      link: "/admin/static_block",
      path: "/admin/static_block",
    },
   
    // {
    //   id: 8,
    //   icon: <MdOutlineFax className={styles.icon} />,
    //   title: "Media",
    //   link: "/admin/media",
    //   path: "/admin/media",
    // },
    {
      id: 10,
      icon: <AiFillSetting className={styles.icons} />,
      title: "Setings",
      link: "/admin/settings",
      path: "/admin/settings",
    },
  ]
 console.log('details')
  return (
    <aside className={styles.sidebar}>
     <div className={styles.container}>
      {
        details.map((datum) => (
          <div key={datum.id} className={styles.cont} >
            <Link href={datum.path} onClick={handleMenuItemClick} className={styles.link}>
                <p>{datum.icon}</p>
                <p>{datum.title}</p>
             
            </Link>
          </div>
        ))
      }
    </div>
  </aside>
  

  )
}

export default Sidebar;