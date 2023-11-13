import React,{Fragment} from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { MdKeyboardArrowDown,MdLocationPin,MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight ,MdLooksOne} from 'react-icons/md'
import {PiNumberOne,PiNumberTwo,PiNumberThree,PiNumberFour,PiDotsThreeBold} from 'react-icons/pi'
import {BiSolidCloudUpload} from 'react-icons/bi'
import {HiLocationMarker} from 'react-icons/hi'
import styles from './property.module.css'
import Inside from '../../../public/Inside.png'
import Fade from '../../../public/fade.png'
import show from '../../../public/Grouptwo.png'
import Location from '../../../public/Location.png'
import upload from '../../../public/upload.png'
import bed from '../../../public/bed.png'
import toilet from '../../../public/toilet.png'
import bath from '../../../public/bath.png'
import Image from 'next/image'
import Link from 'next/link'
import { RxSlash } from 'react-icons/rx'
import CustomFilter from '../custom/filter/customFilter'
import {useRouter} from "next/router";
import Numb from '../Numb/page'



const Property = () => {
  const router = useRouter();




  const details = [
    {
      id:1,
      label:"4 BEDROOM HOUSE FOR SALE",
      pic:Inside,
      location:Location,
      textone:"Lokogma, Abuja",
      textwo:"1,669 kilometers",
      texthree:"Available",
      price:"#50,000",
      icon:<BiSolidCloudUpload color='#76C2AF' className={styles.icons}/>,
      textfive:"Uploaded 16 Oct 2022",
      imageOne:bed,
      textFour:"5 Beds",
      imageTwo:bath,
      textFive:"6 Baths",
      imageThree:toilet,
      textsix:"6 Toilets",
      textSeven:"Premium",
       },
       {
        id:2,
        label:"4 BEDROOM HOUSE FOR SALE",
        pic:Fade,
        location:Location,
        textone:"Lugbe, Abuja",
        textwo:"1,669 kilometers",
        texthree:"Available",
        price:"#50,000",
        icon:<BiSolidCloudUpload color='#76C2AF' className={styles.icons}/>,
        textfive:"Uploaded 16 Oct 2022",
        imageOne:bed,
        textFour:"5 Beds",
        imageTwo:bath,
        textFive:"6 Baths",
        imageThree:toilet,
        textsix:"6 Toilets",
        textSeven:"Sponsored",
         },
         {
          id:3,
          label:"4 BEDROOM HOUSE FOR SALE",
          pic:show,
          location:Location,
          textone:"Maitaima, Abuja",
          textwo:"1,669 kilometers",
          texthree:"Available",
          price:"#50,000",
          icon:<BiSolidCloudUpload color='#76C2AF' className={styles.icons}/>,
          textfive:"Uploaded 16 Oct 2022",
          imageOne:bed,
          textFour:"5 Beds",
          imageTwo:bath,
          textFive:"6 Baths",
          imageThree:toilet,
          textsix:"6 Toilets",
          textSeven:"Premium",
           },
           {
            id:4,
            label:"4 BEDROOM HOUSE FOR SALE",
            pic:show,
            location:Location,
            textone:"Kubwa, Abuja",
            textwo:"1,669 kilometers",
            texthree:"Available",
            price:"#50,000",
            icon:<BiSolidCloudUpload color='#76C2AF' className={styles.icons}/>,
            textfive:"Uploaded 16 Oct 2022",
            imageOne:bed,
            textFour:"5 Beds",
            imageTwo:bath,
            textFive:"6 Baths",
            imageThree:toilet,
            textsix:"6 Toilets",
            textSeven:"Premium",
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
          <p>Property for sale</p>
        </Link>
      </div>
      <div className={styles.contwo}>
        <p>Property for sale</p>
        </div>
        <div className={styles.conthree}>
         <div className={styles.searchcont}>
          <div className={styles.searchone}>
            <p className={styles.text}>Result 1 - 20 of 197038</p>
          </div>
          <div className={styles.searchtwo}>
            <p className={styles.text}>Sort By</p>
            <MdKeyboardArrowDown className={styles.icon} />
            
          </div>
         </div>
        </div>

       <Link href={`/properties/detailsId`}>
       <div className={styles.contfour}>
         {
          details.map((datum) => (
            <div  id={datum.id} key={datum.id}>
            <div  className={styles.maincontfour}>
            <div className={styles.contimg}>
              <div className={styles.imgcont}>
                <Image src={datum.pic} alt='fade-img' className={styles.img} />
              </div>
              <div className={styles.textcont}>
                <p className={styles.label}>{datum.label}</p>
                <div className={styles.location}>
                
                  <div className={styles.locatecont}>
                  <div className={styles.locont}>
                  <Image src={datum.location} alt='location-img' className={styles.locationimg} />

                  </div>
                  </div>
               
                  <div className={styles.citycont}>
                  <p>{datum.textone}</p>
                  </div>
                 
                
                </div>
                <p>{datum.textwo}</p>
                <div className={styles.avacont}>
                  <p className={styles.textava}>{datum.texthree}</p>
                  <p className={styles.price}>{datum.price}</p>
                </div>
                <div className={styles.upload}>
                <p>{datum.icon}</p>
                  <p>{datum.textfive}</p>
                  
                </div>
                <div className={styles.roomdiv}>
                <div className={styles.bedcontainer}>
                  
                  <div className={styles.bedcont}>
                    <Image src={datum.imageOne} alt='bed-img' className={styles.bedimg} />
                  </div>
                  <p>{datum.textFour}</p>
                </div>
                <div className={styles.bedcontainer}>
               
                <div className={styles.bedcont}>
                    <Image src={datum.imageTwo} alt='bed-img' className={styles.bedimg} />
                  </div>
                  <p>{datum.textFive}</p>
                </div>
                <div className={styles.bedcontainer}>
                
                <div className={styles.bedcont}>
                    <Image src={datum.imageThree} alt='bed-img' className={styles.bedimg} />
                  </div>
                  <p>{datum.textsix}</p>
                </div>
                  
                </div>
                <div>

                </div>
              </div>
            </div>



            
            <div className={styles.lastcont}>
              <p>{datum.textSeven}</p>
            </div>
          </div>
          </div>

          ))
         }
        </div>
        </Link>
        <Numb />
       








    </div>
    </Fragment>
  )
}

export default Property