import React, {useState, useEffect } from 'react';
import three from '../../../public/three.webp'
import officeone from '../../../public/officeone.webp'
import officetwo from '../../../public/officetwo.webp'
import officethree from '../../../public/officethree.webp'
import four from '../../../public/four.webp'
import { AiOutlineDoubleRight, AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import axios from 'axios';
import { getRequest } from '@/library/request'
import aoc from '../../../public/aoc.jpeg'
import two from '../../../public/ao.jpeg'
// import three from '../../../public/aob.jpeg'


const Apartment = () => {
  const [property, setProperty] = useState([]);


  const details = [
    {
      id: 1,
      picture:aoc,
      label: ' Duplex',
      description: "2 Bedroom Terraced Duplex + Attached BQ",
      price: "#9,000,000",
      // review: <Review />
    },
    {
      id: 2,
      picture: officeone,
      // categories: "Mini Work Space",
      label: 'Duplex',
      description: "4 Bedroom Terraced Duplex",
      price: "#1,200,000",
      // review: <Review />
    },
    {
      id: 3,
      picture: officethree,
      // categories: "Small Office",
      label: 'Bungalow',
      description: "2 Bedroom Semidetached Bungalow",
      price: "#1,200,000",
      // review: <Review />
    },
    {
      id: 4,
      picture: four,
      // categories: "Big Workspace",
      label: 'Penthouse',
      description: "4 Bedroom Semidetached Penthouse",
      price: "#1,500,000",
      // review: <Review />
    },
    {
        id: 5,
        picture: four,
        // categories: "Big Workspace",
        label: 'Bungalow',
        description: "3 Bedroom Fully Detached Bungalow + a Detached BQ",
        price: "#1,700,000",
        // review: <Review />
      },
      {
        id: 6,
        picture: four,
        // categories: "Big Workspace",
        label: 'Duplex',
        description: "4 Bedroom Fully Detached  Duplex + Detached BQ",
        price: "#2,700,000",
        // review: <Review />
      },
  
      
  ];

  useEffect(() => {
    getRequest("RealEstate/GetAllRealEstatesAsync").then((data) => setProperty(data.data.data.slice(0, 7))).catch((err) => console.log(err))
  }, [])
  console.log(property)

  return (
    <section className='pb-10 pt-5 md:pt-10 '>
      <div className='shadow-2xl grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 md:p-10'>
      {details.map((datum) => (
          <div key={datum.id} className='p-5 w-full drop-shadow-2xl bg-gray-100'>
            <div className='relative'>
              <div className='h-48 w-full'>
                <Image src={datum.picture} width={100} height={100} alt='fade-img' style={{ width: '100%', height: '100%' }} className='h-full w-full object-cover' />
              </div>
              
            </div>
            <div className=' py-3 px-2 flex flex-col justify-between items-start '>
              
              <div className='h-6 md:h-6 w-full lg:h-8  cursor-pointer font-bold  '>
                <p className='text-base md:text-xl lg:text-lg xl:text-xl'>{datum.label}</p>
              </div>
              <div className='h-[30px] md:h-[50px] lg:h-[40px] xl:h-[50px] text-gray-700 cursor-pointer mt-4 '>
                <p className='text-xs md:text-base lg:text-xs xl:text-base '>{datum.description}</p>
              </div>
              <div className='mt-1 h-8 md:h-10 lg:h-12 xl:h-14  w-full'>
                <p className='text-maroon text-xs md:text-base lg:text-xs xl:text-sm font-bold '>{datum.price} per year</p>
              </div>
              <Link href={'/Property/property'}>
              <div className='text-red-700 cursor-pointer flex justify-between items-center gap-2'>
                <p className='text-xs md:text-base lg:text-xs xl:text-sm  '>See More Details</p>
                <AiOutlineDoubleRight className='w-3 h-3 md:w-4 md:h-4 lg:w-3 lg:h-3' />
              </div>
              </Link>
              
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Apartment;
