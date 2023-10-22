import React from 'react';
import one from '../../../public/one.webp'
import two from '../../../public/two.webp'
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

const General = () => {
  const details = [
    {
      id: 1,
      picture: one,
    //   categories: "Mini Work Space",
      label: 'Apartment',
      description: "See city spectacles on a memorable helicopter ride",
      // review: <Review />
    },
    {
      id: 2,
      picture: three,
    //   categories: "Small Office",
      label: 'Vila',
      description: "Visit the spot for mountain scenery and kayaking",
      // review: <Review />
    },
    {
      id: 3,
      picture: four,
    //   categories: "Big Workspace",
      label: 'Studio',
      description: "See city spectacles on a memorable helicopter ride",
      // review: <Review />
    },
    {
        id: 4,
        picture: officetwo,
      //   categories: 'Conference Room',
        label: 'Office',
        description: "A range of ready-to-use, fully-equipped offices with everything you need to get started.",
        // review: <Review />
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
              <div className=' mt-3 h-14 w-full'>
                <p className='text-gray-700'>{datum.categories}</p>
              </div>
              <div className='h-18 text-xl cursor-pointer font-bold hover:underline md:text-3xl'>
                <p>{datum.label}</p>
              </div>
              <div className='text-gray-700 cursor-pointer mt-2'>
                <p className='text-lg lg:text-sm mt-3'>{datum.description}</p>
              </div>
              
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
               
                <div className='text-md mt-0 font-bold hover:underline md:text-xl'>
                  <p>{datum.label}</p>
                </div>
                <div className='mt-1 h-18 text-sm text-gray-700 text-left'>
                  <p>{datum.description}</p>
                </div>
               
              </div>
            </div>
          ))}
        </Carousel> */}
      </div>
    </section>
  );
}

export default General;
