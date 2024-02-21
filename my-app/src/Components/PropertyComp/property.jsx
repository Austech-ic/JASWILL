import React, { Fragment, useState, useEffect } from 'react';

import { AiOutlineSearch } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { MdKeyboardArrowDown, MdLocationPin, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight, MdLooksOne } from 'react-icons/md'
import { PiNumberOne, PiNumberTwo, PiNumberThree, PiNumberFour, PiDotsThreeBold } from 'react-icons/pi'
import { BiSolidCloudUpload } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
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
import { useRouter } from "next/router";
import Numb from '../Numb/page'
import axios from 'axios';
import { getRequest } from '@/library/request'
import { PiBedBold } from "react-icons/pi";
import { FaBath } from "react-icons/fa6";
import { BiBath } from "react-icons/bi";
import one from '../../../public/aok.jpeg'
import aoe from '../../../public/aoe.jpeg'
import two from '../../../public/aob.jpeg'
import three from '../../../public/aoc.jpeg'
import four from '../../../public/aoo.jpeg'
import five from '../../../public/ao.jpeg'
import Loading from '../loading';


const Property = () => {

  const [loading, setLoading] = useState(false); // State variable for loader visibility
  const [currentPage, setCurrentPage] = useState(1);

  const details = [
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
    {
      id: 2,
      pic: aoe,
      label: "JIKWOYI",
      desc: "250SQM",
      location: "Lugbe",
      city: "Abuja",
      price: "#1,200,000",
      beds: "3",
      toilet: "3",
      floor: "1"
    },
    {
      id: 3,
      pic: two,
      label: "JIKWOYI",
      desc: "250SQM",
      location: "Lugbe",
      city: "Abuja",
      price: "#1,200,000",
      beds: "3",
      toilet: "3",
      floor: "1"
    },
    {
      id: 4,
      pic: three,
      label: "JIKWOYI",
      desc: "350SQM",
      location: "Lugbe",
      city: "Abuja",
      price: "#1,500,000",
      beds: "3",
      toilet: "3",
      floor: "1"
    },
    {
      id: 5,
      pic: four,
      label: "JIKWOYI",
      desc: "400SQM",
      location: "Lugbe",
      city: "Abuja",
      price: "#1,700,000",
      beds: "3",
      toilet: "3",
      floor: "1"
    },
    {
      id: 6,
      pic: five,
      label: "JIKWOYI",
      desc: "500SQM",
      location: "Apo",
      city: "Abuja",
      price: "#2,700,000",
      beds: "3",
      toilet: "3",
      floor: "1"
    }
  ]
  const [property, setProperty] = useState([]);
  const router = useRouter();

  const ITEMS_PER_PAGE = 4;
  

  useEffect(() => {
    getRequest('RealEstate/GetAllRealEstatesAsync')
      .then((data) => setProperty(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  // const currentItems = property.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = details.slice(indexOfFirstItem, indexOfLastItem);

  const MAX_PAGES = 10;

  const paginate = (pageNumber) => {
    setLoading(true); // Show loader when pagination button is clicked
    // Simulate asynchronous operation (fetching data, etc.)
    setTimeout(() => {
      setCurrentPage(Math.min(Math.max(pageNumber, 1), MAX_PAGES));
      setLoading(false); // Hide loader once next page is ready
    }, 1000); // Adjust delay time according to your need
  };



  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
         <CustomFilter />
      <div className={styles.main}>
        <div className={styles.subone}>
          <Link href={`/`} className={styles.link}>
            <p>Home</p>
          </Link>
          <RxSlash />
          <Link href={`/Property/property`} className={styles.link}>
                    <p>Property for sale in Abuja {property.city}</p>
                </Link>

        </div>
        {/* <div>
          {currentItems.map((datum) => (
            <div key={datum.id} style={{ cursor: 'pointer' }} className={styles.propertyItem}>
              <Link href={`/Property/${datum.id}`}>
                <div className={styles.maincontfour}>
                  <div className={styles.contimg}>
                    <div className={styles.imgcont}>
                      <Image src={datum.imageUrl} width={100} height={100} alt='fade-img' style={{ width: '100%', height: '100%' }} className={styles.img} />
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
                          <p>,</p>
                          <p>{datum.city}</p>
                        </div>
                      </div>
                      <p>{datum.textwo}</p>
                      <div className={styles.avacont}>
                        <p className={styles.textava}>Availabe</p>
                        <p className={styles.price}>{datum.price}</p>
                      </div>
                      <div className={styles.upload}>
                        <p>{datum.icon}</p>
                        <p>{datum.textfive}</p>
                      </div>
                      <div className={styles.roomdiv}>
                        <div className={styles.bedcontainer}>
                          <PiBedBold className={styles.icom} />
                          <p>{datum.numberOfBedrooms} Bedroom(s)</p>
                        </div>

                        <div className={styles.bedcontainer}>
                          <BiBath className={styles.icom} />
                          <p>{datum.numberOfBathrooms} Bathroom(s)</p>
                        </div>

                      </div>
                      <div>
                        <div >
                          <p>Number of {datum.numberOfFloors} Floor(s)</p>
                        </div>

                      </div>
                    </div>
                  </div>
                 
                </div>
              </Link>
            </div>
          ))}
        </div> */}

        
          {currentItems.map((datum) => (
            <div key={datum.id} style={{ cursor: 'pointer' }} className={styles.propertyItem}>
              <Link href={`/Property/${datum.id}`}>
                <div className={styles.maincontfour}>
                    <div className={styles.contimg}>

                      <div className={styles.imgcont}>
                        <Image src={datum.pic}  alt='fade-img' style={{ width: '50rem',height: '30vh', objectFit: 'fit' }} className='' />
                      </div>

                      <div className={styles.textcont}>
                        <p className={styles.label}>{datum.label}</p>
                        <p className={styles.labeltext}>{datum.desc}</p>
                        <div className={styles.location}>
                          <div className={styles.locatecont}>
                            <div className={styles.locont}>
                              <Image src={Location} alt='location-img' className={styles.locationimg} />
                            </div>
                          </div>
                          <div className={styles.citycont}>
                            <p className=''>{datum.location}</p>
                            <p>,</p>
                            <p>{datum.city}</p>
                          </div>
                        </div>
                        <p>{datum.textwo}</p>
                        <div className={styles.avacont}>
                          <p className={styles.textava}>Availabe</p>
                          <p className={styles.price}>{datum.price}</p>
                        </div>
                        <div className={styles.upload}>
                          <p>{datum.icon}</p>
                          <p>{datum.textfive}</p>
                        </div>
                        <div className={styles.roomdiv}>
                          <div className={styles.bedcontainer}>
                            <PiBedBold className={styles.icom} />
                            <p>{datum.beds} Bedroom(s)</p>
                          </div>

                          <div className={styles.bedcontainer}>
                            <BiBath className={styles.icom} />
                            <p>{datum.toilet} Bathroom(s)</p>
                          </div>

                        </div>
                        <div>
                          <div >
                            <p>Number of Floor(s) : {datum.floor}</p>
                          </div>

                        </div>
                      </div>
                    </div>
                    </div>
              </Link>
            </div>
          ))}
       





        <div className={styles.subfive}>
          <div className={styles.paginationButtons}>
            <div className={styles.iconcont} onClick={() => paginate(currentPage - 1)}>
              <MdOutlineKeyboardDoubleArrowLeft className={styles.icons} />
            </div>
            <p>Page {currentPage}</p>
            <div className={styles.iconcont} onClick={() => paginate(currentPage + 1)}>
              <MdOutlineKeyboardDoubleArrowRight className={styles.icons} />
            </div>
          </div>
        </div>
      </div>
        </>
      )}
     

    </Fragment>
  )
}

export default Property