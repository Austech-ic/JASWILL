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
import aok from '../../../public/aok.jpeg'
import aoe from '../../../public/aoe.jpeg'
import aob from '../../../public/aob.jpeg'
import aoc from '../../../public/aoc.jpeg'
import aoo from '../../../public/aoo.jpeg'
import ao from '../../../public/ao.jpeg'
import go from '../../../public/go.jpeg'
import goo from '../../../public/goo.jpeg'
import goe from '../../../public/goe.jpeg'
import goc from '../../../public/goc.jpeg'

// import three from '../../../public/aob.jpeg'


const Apartment = () => {
  const [property, setProperty] = useState([]);


  const details = [
    {
      id: 1,
      picture:aok,
      label: 'JIKWOYI',
      description: "2 Bedroom Terraced Duplex + Attached BQ (180SQM)",
      price: "#900,000",
      // review: <Review />
    },
    {
      id: 2,
      picture: aoe,
      // categories: "Mini Work Space",
      label: 'JIKWOYI',
      description: "4 Bedroom Terraced Duplex (250SQM)",
      price: "#1,200,000",
      // review: <Review />
    },
    {
      id: 3,
      picture: aob,
      // categories: "Small Office",
      label: 'JIKWOYI',
      description: "2 Bedroom Semidetached Bungalow (250SQM)",
      price: "#1,200,000",
      // review: <Review />
    },
    {
      id: 4,
      picture: aoc,
      // categories: "Big Workspace",
      label: 'JIKWOYI',
      description: "4 Bedroom Semidetached Penthouse (350SQM)",
      price: "#1,500,000",
      // review: <Review />
    },
    {
        id: 5,
        picture: aoo,
        // categories: "Big Workspace",
        label: 'JIKWOYI',
        description: "3 Bedroom Fully Detached Bungalow + a Detached BQ (400SQM)",
        price: "#1,700,000",
        // review: <Review />
      },
      {
        id: 6,
        picture: ao,
        // categories: "Big Workspace",
        label: 'JIKWOYI',
        description: "4 Bedroom Fully Detached  Duplex + Detached BQ (500SQM)",
        price: "#2,700,000",
        // review: <Review />
      },
      {
        id: 7,
        picture: go,
        // categories: "Big Workspace",
        label: 'Guzape 2',
        description: "4 Bedroom Terrace Duplex (250SQM)",
        price: "#8,000,000",
        // review: <Review />
      },
      {
        id: 8,
        picture: goo,
        // categories: "Big Workspace",
        label: 'Guzape 2',
        description: "5 Bedroom Semidetached Duplex + Attached BQ (350SQM)",
        price: "#11,000,000",
        // review: <Review />
      },
      {
        id: 9,
        picture: goe,
        // categories: "Big Workspace",
        label: 'Guzape 2',
        description: "4 Bedroom Detached Duplex + Attached BQ (500SQM)",
        price: "#13,500,000",
        // review: <Review />
      },
      {
        id: 10,
        picture: goc,
        // categories: "Big Workspace",
        label: 'Guzape 2',
        description: "4 Bedroom Detached Duplex + Detached BQ (600SQM)",
        price: "#15,000,000",
        // review: <Review />
      },
  
      
  ];

  useEffect(() => {
    getRequest("RealEstate/GetAllRealEstatesAsync").then((data) => setProperty(data.data.data.slice(0, 7))).catch((err) => console.log(err))
  }, [])
  console.log(property)

  return (
    <section className='pb-10 pt-5 md:pt-10 '>
      <div className='shadow-2xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-5 md:p-10'>
      {details.map((datum) => (
          <div key={datum.id} className='p-5 w-full drop-shadow-2xl bg-gray-100'>
           <div className='relative'>
  <div className='h-48 w-full flex items-center justify-center'>
    <Image 
      src={datum.picture} 
      alt='fade-img' 
      layout="fill" // Use layout="fill" to fill the container
      objectFit="cover" // Use object-fit to fill the container without distortion
    />
  </div>
</div>

            <div className=' py-3 px-2 flex flex-col justify-between items-start gap-3 '>
              
              <div className='h-6 md:h-[6vh] w-full cursor-pointer font-bold  '>
                <p className='text-base md:text-xl lg:text-lg xl:text-xl'>{datum.label}</p>
              </div>
              <div className='h-[40px] md:h-[95px] lg:h-[60px] xl:h-[65px] text-gray-700 cursor-pointer '>
                <p className='text-xs md:text-lg lg:text-sm'>{datum.description}</p>
              </div>
              <div className=' h-4 md:h-6 w-full'>
                <p className='text-maroon text-xs md:text-base lg:text-xs xl:text-sm font-bold '>{datum.price}</p>
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
