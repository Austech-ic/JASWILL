import React from 'react';
import Review from './Review'
import three from '../../../public/three.webp'
import officeone from '../../../public/officeone.webp'
import officetwo from '../../../public/officetwo.webp'
import officethree from '../../../public/officethree.webp'
import four from '../../../public/four.webp'
import { AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Office = () => {
  const details = [
    {
      id: 1,
      picture: officetwo,
      label: 'Custom Offices',
      description: "When off-the-shelf simply isn’t enough. Customise all aspects of your space, including furniture and branding.",
      categories: 'NGN 103,900 per person per month',
      review: <Review />
    },
    {
      id: 2,
      picture: officeone,
      // categories: "Mini Work Space",
      label: 'Day Offices',
      description: "A professional on-demand office space. Perfect when you need to get your head down and do your best work.",
      categories: 'NGN 103,900 per person per month',
      review: <Review />
    },
    {
      id: 3,
      picture: officethree,
      // categories: "Small Office",
      label: 'Private Offices',
      description: "A range of ready-to-use, fully-equipped offices with everything you need to get started.",
      categories: 'NGN 103,900 per person per month',
      review: <Review />
    },
    {
      id: 4,
      picture: four,
      // categories: "Big Workspace",
      label: ' Membership',
      description: "Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.",
      categories: 'NGN 103,900 per person per month',
      review: <Review />
    },
  ];

  return (
    <section>
      <div className='hidden md:grid grid-cols-2 lg:grid-cols-4'>
        {details.map((datum) => (
          <div key={datum.id} className='p-5 w-full'>
            <div className='relative'>
              <div className='h-48 w-full'>
                <Image src={datum.picture} alt='pic' className='h-full w-full object-cover' />
              </div>
              
            </div>
            <div className=' py-5 px-2 flex flex-col justify-between items-start'>
              
              <div className='h-18 text-xl cursor-pointer font-bold hover:text-maroon md:text-md'>
                <p>{datum.label}</p>
              </div>
              <div className=' h-[120px] text-gray-700 cursor-pointer mt-4'>
                <p className='text-sm'>{datum.description}</p>
              </div>
              <div className=' mt-1  h-14 w-full'>
                <p className='text-maroon text-sm font-bold '>{datum.categories}</p>
              </div>
              {/* <div className='flex justify-start items-center cursor-pointer mt-3'>
                {datum.review}
              </div> */}
            </div>
          </div>
        ))}
      </div>
      {/* Render the mobile view with carousel */}
      <div className='md:hidden'>
        {/* <Carousel showStatus={false} showThumbs={false} emulateTouch={true} showIndicators={true} interval={10000}>
          {details.map((datum) => (
            <div key={datum.id} className='p-5'>
              <div className='relative'>
                <div className='w-full' style={{ display: 'flex', aspectRatio: '1/1' }} data-aos="zoom-in" data-aos-duration="1000">
                  <Image src={datum.picture} alt='pic' className='h-full w-full object-cover' />
                </div>
    
              </div>
              <div className='p-5 flex flex-col justify-between items-start bg-blue-100'>
                
                <div className='text-md mt-3 font-bold hover:underline md:text-3xl'>
                  <p>{datum.label}</p>
                </div>
                <div className='mt-3 text-sm text-gray-700 text-left'>
                  <p>{datum.description}</p>
                </div>
                <div className='mt-3 text-sm text-start text-gray-700'>
                  <p>{datum.categories}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel> */}
      </div>
    </section>
  );
}

export default Office;
