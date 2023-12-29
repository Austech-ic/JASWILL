import React from 'react';
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

const Apartment = () => {
  const details = [
    {
      id: 1,
      picture: officetwo,
      label: 'Bungalow',
      description: "When off-the-shelf simply isn’t enough. Customise all aspects of your space, including furniture and branding.",
      categories: 'NGN 103,900 per person per month',
      // review: <Review />
    },
    {
      id: 2,
      picture: officeone,
      // categories: "Mini Work Space",
      label: 'Semidetached Penthouse',
      description: "A professional on-demand office space. Perfect when you need to get your head down and do your best work.",
      categories: 'NGN 103,900 per person per month',
      // review: <Review />
    },
    {
      id: 3,
      picture: officethree,
      // categories: "Small Office",
      label: 'Detached Penthouse',
      description: "A range of ready-to-use, fully-equipped offices with everything you need to get started.",
      categories: 'NGN 103,900 per person per month',
      // review: <Review />
    },
    {
      id: 4,
      picture: four,
      // categories: "Big Workspace",
      label: ' Terrace',
      description: "Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.",
      categories: 'NGN 103,900 per person per month',
      // review: <Review />
    },
    {
        id: 5,
        picture: four,
        // categories: "Big Workspace",
        label: 'Semidetached Duplex',
        description: "Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.",
        categories: 'NGN 103,900 per person per month',
        // review: <Review />
      },
      {
        id: 6,
        picture: four,
        // categories: "Big Workspace",
        label: 'Detached Duplex',
        description: "Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.",
        categories: 'NGN 103,900 per person per month',
        // review: <Review />
      },
      {
        id: 7,
        picture: four,
        // categories: "Big Workspace",
        label: 'Block of Flat',
        description: "Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.",
        categories: 'NGN 103,900 per person per month',
        // review: <Review />
      },
      
  ];

  return (
    <section className='pb-10 pt-5 md:pt-10 '>
      <div className='shadow-2xl grid md:grid-cols-2 lg:grid-cols-4'>
        {details.map((datum) => (
          <div key={datum.id} className='p-5 w-full'>
            <div className='relative'>
              <div className='h-48 w-full'>
                <Image src={datum.picture} alt='pic' className='h-full w-full object-cover' />
              </div>
              
            </div>
            <div className=' py-3 px-2 flex flex-col justify-between items-start '>
              
              <div className='h-8 md:h-10 w-full lg:h-[65px]  cursor-pointer font-bold '>
                <p className='text-base md:text-xl lg:text-lg xl:text-xl'>{datum.label}</p>
              </div>
              <div className='h-[60px] md:h-[120px] lg:h-[90px] xl:h-[130px] text-gray-700 cursor-pointer mt-4'>
                <p className='text-xs md:text-base lg:text-xs xl:text-base'>{datum.description}</p>
              </div>
              <div className='mt-1 h-8 md:h-10 lg:h-12 xl:h-14  w-full'>
                <p className='text-maroon text-xs md:text-base lg:text-xs xl:text-sm font-bold '>{datum.categories}</p>
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
