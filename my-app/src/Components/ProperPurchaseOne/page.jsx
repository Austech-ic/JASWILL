import React from 'react'
import styles from './page.module.css'
import { RxSlash } from 'react-icons/rx'
import Link from 'next/link'
import Inside from '../../../public/inside.png'



const page = () => {
    return (
        <div className={styles.main}>
            <div className={styles.subone}>
                <Link href={`/`} className={styles.link}>
                    <p>Home</p>
                </Link>
                <RxSlash />
                <Link href={`/propertypage`} className={styles.link}>
                    <p>Property for sale in Abuja</p>
                </Link>
                <RxSlash />
                <Link href={`/lokogomaProp`} className={styles.link}>
                    <p>Property for sale in Lokogoma</p>
                </Link>
            </div>
            <div className={styles.subtwo}>

                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div>
                    <p>Safety Tips</p>
                    <ul>
                        <li>Do not make any upfront payment as inspection fee or upfront payment for rent before seeing this property or seeing the agent you contacted physically. PropertyPro.ng is not liable for monetary transactions between you and the agents.</li>
                        <li>
                            The contact agent on properties listed on PropertyPro.ng does not represent PropertyPro.ng. PropertyPro.ng will not mandate agents to ask for fees upfront.
                        </li>
                    </ul>
                </div>

                <div>
                    <div>
                        <p>Key Features</p>

                        <p>icon 2 Bedrooms</p>
                        <p>icon Serviced</p>
                        <p>icon Updated 16 Oct 2022, Added 12 Oct 2022</p>
                    </div>

                    <div>
                        <p>Full Description</p>

                        <p>4 bedroom Flat / Apartment for sale Lokogoma Abuja for ₦50,000,000.</p>
                        <p>photos. Contact now for quick details on 2 bedroom flat</p>
                        
                    </div>

                    <div>
                        <p>sale 50,000,000</p>

                        <p>Agency 10%</p>
                        <p>Agreement 10%</p>
                        <p>Caution 30k</p>
                        <p>Service charge 120k per month ( for cleaning, waste, and security)</p>
                        <p>Total package 51,230,000</p>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default page