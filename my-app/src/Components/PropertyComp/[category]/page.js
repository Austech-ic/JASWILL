import React, {Fragment} from 'react'
import styles from './page.module.css'
import { RxSlash } from 'react-icons/rx'
import Image from 'next/image'
import {MdLocationPin} from 'react-icons/md'
import Link from 'next/link'
import Location from '../../../../public/Location.png'
import Inside from '../../../../public/Insidetwo.png'
import CustomFilter from '../../custom/filter/customFilter'
import { items } from "./data"
import { isNotFoundError } from 'next/dist/client/components/not-found'
import { useRouter } from 'next/router';





  const Category = ({ params }) => {


    const details = [
        {
            id: 1,
            pic: Inside,
        },
        {
            id: 2,
            pic: Inside,
        },
        {
            id: 3,
            pic: Inside,
        },
        {
            id: 4,
            pic: Inside,
        },
        {
            id: 5,
            pic: Inside,
        }
    ]
    return (
        <Fragment>
             <CustomFilter />
        <div className={styles.main}>
            <div className={styles.subone}>
                <Link href={`/`} className={styles.link}>
                    <p>Home</p>
                </Link>
                <RxSlash />
                <Link href={`/properties`} className={styles.link}>
                    <p>Property for sale in Abuja</p>
                </Link>
                <RxSlash />
                <Link href={`/properties/detailsId`} className={styles.link}>
                    <p>Property for sale in Lokogoma</p>
                </Link>
            </div>
            
            <div className={styles.subtwo}>
           
            <div className={styles.divcont}>
                    <div className={styles.divone}>
                        <div className={styles.innerdivone}>
                            <p className={styles.label}>4 BEDROOM HOUSE FOR SALE</p>
                            <p>Lokogma, Abuja</p>
                            <p>1,669 kilometers</p>
                            <p className={styles.view}>view similar properties in this area</p>
                        </div>
                        <div className={styles.innerdivtwo}>
                            <p className={styles.label}>N50, 000, 000</p>
                        </div>
                    </div>
                    <div className={styles.imgcont}>
                        <Image src={Inside} className={styles.img} alt='inside-img' />
                    </div>
                    <div className={styles.contone}>
                        {
                            details.map((datum => (
                                <div key={datum.id} className={styles.cont} >
                                    <Image src={datum.pic} className={styles.imgs} alt='cont-img' />
                                </div>
                            )))
                        }
                    </div>
                </div>
               

                <div className={styles.contwo}>
                    <p className={styles.text}>Safety Tips</p>
                    <ul className={styles.list}>
                        <li className={styles.listsub}>Do not make any upfront payment as inspection fee or upfront payment for rent before seeing this property or seeing the agent you contacted physically. PropertyPro.ng is not liable for monetary transactions between you and the agents.</li>
                        <li className={styles.listsub}>
                            The contact agent on properties listed on PropertyPro.ng does not represent PropertyPro.ng. PropertyPro.ng will not mandate agents to ask for fees upfront.
                        </li>
                    </ul>
                </div>

                <div>
                    <div className={styles.contextone}>
                        <p className={styles.textone}>Key Features</p>

                        <div className={styles.textcont}>
                            <p>icon 2 Bedrooms</p>
                            <p>icon Serviced</p>
                            <p>icon Updated 16 Oct 2022, Added 12 Oct 2022</p>
                        </div>
                    </div>

                    <div className={styles.contextone}>
                        <p className={styles.textone}>Full Description</p>

                        <div className={styles.textcont}>
                            <p>4 bedroom Flat / Apartment for sale Lokogoma Abuja for ₦50,000,000.</p>
                            <Link href="https://wa.me/message/J3AEV6SQGELOJ1" className={styles.link}>
                            <p className={styles.view} >Contact now for quick details on 2 bedroom flat</p>
                            </Link>
                        </div>

                    </div>

                    <div className={styles.contextone}>
                        <div className={styles.textcont}>
                            <p>Sale 50,000,000</p>

                            <p>Agency 10%</p>
                            <p>Agreement 10%</p>
                            <p>Caution 30k</p>
                            <p>Service charge 120k per month ( for cleaning, waste, and security)</p>
                            <p className={styles.bold}>Total package 51,230,000</p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
        </Fragment>
    )
}

export default Category;