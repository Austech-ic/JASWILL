import React, { Fragment, useState, useEffect } from 'react';

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
import axios from 'axios';
import { getRequest } from '@/library/request'
import { PiBedBold } from "react-icons/pi";
import { FaBath } from "react-icons/fa6";
import { BiBath } from "react-icons/bi";




const Property = () => {
  const [property, setProperty] = useState([]);
 
  const router = useRouter();

  const ITEMS_PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const HandleView = (id) => {
    router.push(`/properties/${id}`)
    // console.log('testing id');

    // router.push(`/properties/detailsId`)
  }

  useEffect(() => {
    getRequest("RealEstate/GetAllRealEstatesAsync").then((data) => setProperty(data.data.data.slice(0, 7))).catch((err) => console.log(err))
  }, [])
  console.log(property)



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
             },
             {
              id:5,
              label:"4 BEDROOM HOUSE FOR SALE",
              pic:show,
              location:Location,
              textone:"Apo, Abuja",
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
                id:6,
                label:"4 BEDROOM HOUSE FOR SALE",
                pic:show,
                location:Location,
                textone:"Dutse, Abuja",
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
                  id:7,
                  label:"4 BEDROOM HOUSE FOR SALE",
                  pic:show,
                  location:Location,
                  textone:"Buari, Abuja",
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
                    id:8,
                    label:"4 BEDROOM HOUSE FOR SALE",
                    pic:show,
                    location:Location,
                    textone:"Zuba, Abuja",
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
                      id:9,
                      label:"4 BEDROOM HOUSE FOR SALE",
                      pic:show,
                      location:Location,
                      textone:"Central Area, Abuja",
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
                        id:10,
                        label:"4 BEDROOM HOUSE FOR SALE",
                        pic:show,
                        location:Location,
                        textone:"Karu, Abuja",
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


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedDetails = details.slice(startIndex, endIndex);

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
               
            </div>
      {property.map((datum) => (
  <div key={datum.id} onClick={() => HandleView(datum.id)} style={{ cursor: 'pointer' }} className={styles.propertyItem}>
    <div className={styles.maincontfour}>
      <div className={styles.contimg}>
        <div className={styles.imgcont}>
          <Image src={datum.imageUrl} width={100} height={100} alt='fade-img' className={styles.img} />
        </div>
        <div className={styles.textcont}>
          <p className={styles.label}>{datum.title}</p>
          <p className={styles.labeltext}>{datum.description}</p>
          <div className={styles.location}>
            <div className={styles.locatecont}>
              <div className={styles.locont}>
                <Image src={Location} alt='location-img' className={styles.locationimg} />
              </div>
            </div>
            <div className={styles.citycont}>
              <p className=''>{datum.propertylocation}</p>
              <p className=''>,</p>
              <p>{datum.city}</p>
            </div>
          </div>
          <p>{datum.textwo}</p>
          <div className={styles.avacont}>
            <p className={styles.textava}>Availabe</p>
            <p className={styles.price}>#50,000</p>
          </div>
          <div className={styles.upload}>
            <p>{datum.icon}</p>
            <p>{datum.textfive}</p>
          </div>
          <div className={styles.roomdiv}>
            <div className={styles.bedcontainer}>
            <p>{datum.numberOfBedrooms}</p>
             
              <PiBedBold className={styles.icom} />
            
            </div>
            <div className={styles.bedcontainer}>
            <p>{datum.numberOfBathrooms}</p>
            <BiBath className={styles.icom} />
              
            </div>
            {/* <div className={styles.bedcontainer}>
            <p>{datum.numberOfFloors}</p>
              <div className={styles.bedcont}>
                <Image src={toilet} alt='bed-img' className={styles.room} />
              </div>
             
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className={styles.lastcont}>
        <p>{datum.textSeven}</p>
      </div> */}
    </div>
  </div>
))}

        <div className={styles.contfour}>
          {paginatedDetails.map((datum) => (
            <div key={datum.id} onClick={() => HandleView(datum.id)} style={{ cursor: 'pointer' }}>
              {/* Your existing code for rendering property details */}
            </div>
          ))}
        </div>

        <div className={styles.subfive}>
          <p>Page {currentPage}</p>
          {details.length > ITEMS_PER_PAGE && (
            <div className={styles.paginationButtons}>
              
              <div className={styles.iconcont}>
            <MdOutlineKeyboardDoubleArrowLeft
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
             className={styles.icons} />
          </div>
              {Array.from({ length: Math.ceil(details.length / ITEMS_PER_PAGE) }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={pageNumber === currentPage ? styles.activePage : ''}
                  >
                    {pageNumber}
                  </button>
                )
              )}
               <div className={styles.iconcont}>
            <MdOutlineKeyboardDoubleArrowRight
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(details.length / ITEMS_PER_PAGE)))}
            disabled={currentPage === Math.ceil(details.length / ITEMS_PER_PAGE)}
             className={styles.icons}  />
          </div>
            
            </div>
          )}
        </div>
      
        
      </div>
     
    </Fragment>
  )
}

export default Property