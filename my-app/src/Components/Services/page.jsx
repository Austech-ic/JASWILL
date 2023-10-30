import React from 'react'
import styles from './page.module.css'
import {MdRealEstateAgent} from 'react-icons/md'
import { FaHouseUser } from 'react-icons/fa'
import Image from 'next/image'
import iconthree from '../../../public/iconthree.png'
import icontwo from '../../../public/twoicon.png'
import iconone from '../../../public/oneicon.png'
import iconfour from '../../../public/fouricon.png'
import iconfive from '../../../public/fiveicon.png'
import iconsix from '../../../public/sixicon.png'
import house from '../../../public/download.png'

const page = () => {
  const details =[
    {
        id:1,
       pic:iconthree,
        label:"Property Sale",
        text:"If you want to buy land or a house in the FCT, go no further than Jaswill Properties. Our team's professionals work to match you with a home that suits your needs.",
    
    },
    {
        id:2,
        pic:iconone,
        label:"Estate Management",
        text:"We assess, market, and manage estate lots, commercial lots, home buildings, and merchant buildings.",
  
    },
    {
        id:3,
        pic:iconfour,
        label:"Estate Development",
        text:"Our business encompasses different stages of the real estate development matrix, but focuses more on land development, building development, and building operations.",
      
    },
    {
        id:4,
        pic:iconfive,
        label:"Architecture/Interior Design",
        text:"We pay attention to the design of a building and also the planning and finishing of its interior spaces..",
    
    },
    {
        id:5,
        pic:iconsix,
        label:"Construction",
        text:"For the estates we manage, our engineering team creates, plans, and builds in accordance with government-approved prototypes.",
    
    },
    {
        id:6,
        pic:icontwo,
        label:"Facility Management",
        text:"Our support services include the planning, organizing, and maintaining of estate facilities to a predefined standard over a prolonged duration.",
     
    },
]
  return (
    <div className={styles.main} id='services'>
      <p className={styles.headtext}>Our Services</p>
      <div className='grid gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3'>
           
            {
                details.map((datum) => (
                    <div key={datum.id} className={styles.subcont}>
                      <div className={styles.iconcont}>
                        
                          <Image src={datum.pic} alt='house-img' className={styles.pic}/>
                          
                     
                      </div>
                       
                        <p className={styles.label}>{datum.label}</p>
                        <p className={styles.text}>{datum.text}</p>
                     
                       

                        </div>
                ))
            }
          
           </div>
           
    </div>
  )
}

export default page