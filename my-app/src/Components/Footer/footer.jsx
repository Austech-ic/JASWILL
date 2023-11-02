import styles from './footer.module.css'
import Image from 'next/image'
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import bg from '../../../public/twojas.png'



const Footer = () => {
    const details = [
        {
            id: 1,
            icon: <BsInstagram className={styles.icon} />,
        },
        {
            id: 2,
            icon: <FaGooglePlusG className={styles.icon} />,
        },
        {
            id: 3,
            icon: <GrLinkedinOption className={styles.icon} />,
        },
        {
            id: 4,
            icon: <FaFacebookF className={styles.icon} />,
        },
    ]
    const about = [
        {
            id: 1,
            text: "About us",
            icons: <IoIosArrowForward className={styles.iconew} />
        },
        {
            id: 2,
            text: "Our Mission",
            icons: <IoIosArrowForward className={styles.iconew} />
        },
        {
            id: 3,
            text: "Our Services",
            icons: <IoIosArrowForward className={styles.iconew} />
        },
        {
            id: 4,
            text: "FAQ",
            icons: <IoIosArrowForward className={styles.iconew} />
        }
    ]
    const legal = [
        {
            id: 1,
            text: "Terms",
            icons: <IoIosArrowForward className={styles.iconew} />
        },
        {
            id: 2,
            text: "Privacy",
            icons: <IoIosArrowForward className={styles.iconew} />
        },
        {
            id: 3,
            text: "Settings",
            icons: <IoIosArrowForward className={styles.iconew} />
        }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.cont}>
                    <div className={styles.divone}>
                        <div className={styles.imgcont}>
                            <Image src={bg} alt='footer-img' className={styles.footer} />
                        </div>

                        <div className={styles.abtcont}>
                            <p className={styles.texts}>Jaswill is  a fully functional real estate
                                company in Nigeria that is leading the
                                way in the purchasing and/or
                                selling of properties.
                            </p>

                        </div>

                    </div>
                    <div className={styles.divtwo}>
                        <p className={styles.label}>Quick Links</p>
                        <div className={styles.abtcont}>

                            {
                                about.map((items) => (
                                    <div key={items.id} className={styles.conticon}>
                                        <p>{items.icons}</p>
                                        <p className={styles.text}>{items.text}</p>
                                    </div>
                                ))
                            }



                        </div>
                    </div>
                    <div className={styles.divthree}>
                        <p className={styles.label}>Legal</p>
                        <div className={styles.abtcont}>
                            {
                                legal.map((content) => (
                                    <div key={content.id} className={styles.conticon}>
                                        <p>{content.icons}</p>
                                        <p className={styles.text}>{content.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.divfour}>
                        <p className={styles.label}>Contact</p>
                        <div className={styles.abtcont}>
                            <div className={styles.conticon}>
                                <IoIosArrowForward className={styles.iconew} />
                                <p className={styles.text}>Our Services</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.subcont}>
                    {
                        details.map((datum) => (
                            <div key={datum.id}
                                className={styles.white}>
                                <p>{datum.icon}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className={styles.linecont}>
                <hr className={styles.line} />
            </div>
            <div className={styles.lastcont}>
                <p className={styles.lasttxt}>Copyright © 2023 By Jaswill. All Rights Reserved</p>
            </div>



        </div>
    )
}


export default Footer;