import React, {Fragment, useState, useEffect} from 'react'
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
import { getRequest } from '@/library/request'
import Footer from '@/Components/Footer/footer'
import one from '../../../../public/aok.jpeg'
import aoe from '../../../../public/aoe.jpeg'
import two from '../../../../public/aob.jpeg'
import three from '../../../../public/aoc.jpeg'
import four from '../../../../public/aoo.jpeg'
import five from '../../../../public/ao.jpeg'



  const Category = ({id}) => {

    const [property, setProperty] = useState([]);

    const Description =[
        {
            id:1,
            
        }
    ]


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

    const info = [
        {
          id: 1,
          pic: one,
          label: "JIKWOYI",
          desc: "180SQM",
          location: "Lugbe",
          city: "Abuja",
          price: "#9,000,000",
          beds: "3",
          toilet: "3",
          floor: "1"
        },
       
      ]

    useEffect(() => {
        getRequest(`RealEstate/GetRealEstateById/${id}`)
          .then((response) => setProperty(response.data.data))
          .catch((error) => console.log(error));
      }, [id]);
    
      console.log(property);


    return (
        <Fragment>
             <CustomFilter />
        <div className={styles.main}>
            <div className={styles.subone}>
                <Link href={`/`} className={styles.link}>
                    <p>Home</p>
                </Link>
                <RxSlash />
                <Link href={`/Property/property`} className={styles.link}>
                    <p>Property for sale in {property.city}</p>
                </Link>
                <RxSlash />
                <Link href={`/Property/detailsId`} className={styles.link}>
                    <p>Property for sale in {property.propertylocation}</p>
                </Link>
            </div>
            
            <div className={styles.subtwo}>
           
            <div className={styles.divcont}>
                    <div className={styles.divone}>
                        <div className={styles.innerdivone}>
                            <p className={styles.label}>{property.description}</p>
                            <p className={styles.label}>{property.title}</p>
                            <div className='flex items-center'>
                                <p>{property.propertylocation}</p>
                                <p>,</p>
                            <p>{property.city}</p>
                            </div>
                            
                        </div>
                        <div className={styles.innerdivtwo}>
                            <p className={styles.label}>{property.price}</p>
                        </div>
                    </div>
                    <div className={styles.imgcont}>
                        <Image src={property.imageUrl}
                         width={1000}
                         height={500}
                         style={{ width: '100%', height: '100%' }}
                          alt='Property-Image' />
                    </div>
                    <div className={styles.contone}>
                        {
                            details.map((datum => (
                                <div key={datum.id} className={styles.cont} >
                                    <Image src={property.imageUrl} width={1000} height={1000} className={styles.imgs} alt='cont-img' />
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
                            <p>{property.numberOfBedrooms} Bedroom(s)</p>
                            <p>Property {property.type}</p>
                            <p>{property.createdOn}</p>
                        </div>
                    </div>

                    <div className={styles.contextone}>
                        <p className={styles.textone}>Full Description</p>

                        <div className={styles.textcont}>
                            <p>{property.content} in Apartment for sale in  {property.propertylocation} {property.city}.</p>
                            <Link href="https://wa.me/message/R3XZ3HBLHXWMG1" className={styles.link}>
                            <p className={styles.view} >Contact now for quick details on the property</p>
                            </Link>
                        </div>

                    </div>

                    {/* <div className={styles.contextone}>
                        <div className={styles.textcont}>
                           
                            <p>Agency Fee {property.agency}</p>
                            <p>Agreement Fee {property.agreement}</p>
                            <p>Caution Fee {property.caution}</p>
                            <p>Service charge {property.serviceCharge}</p>
                            <p className={styles.bold}>Total package {property.total}</p>

                        </div>
                    </div> */}

                </div>

            </div>
        </div>


        
        <Footer />
        </Fragment>
    )
}

export default Category;