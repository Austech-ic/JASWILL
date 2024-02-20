import { useState, useEffect }  from 'react'
import Apartment from './apartment';

const Page = () => {

    const [showAll, setShowAll] = useState(true);
    const [showApartment, setShowApartment] = useState(false);
    const [showArt, setShowArt] = useState(false);
   
    const handleAllClick = () => {
      setShowAll(true);
      setShowApartment(false);
      setShowArt(false);
      
    };
  
    const handleApartmentClick = () => {
      setShowAll(false);
      setShowApartment(true);
      setShowArt(false);
      
    };
  
    const handleArtClick = () => {
      setShowAll(false);
      setShowApartment(false);
      setShowArt(true);
     
    };
  
    


  return (
    <section className=' px-10 md:py-10 md:px-20 lg:px-20 xl:px-24' id='properties' data-aos="flip-down">
    <div>
      <div className='mt-5'>
        <p className='text-center py-2 text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-medium'>Explore By Property Type</p>
      </div>
      <div className='overflow-x-auto '>
    <div >
    <div style={{ cursor: 'pointer' }} className='flex justify-around items-center cursor-pointer p-5' >
    
    <div style={{ cursor: 'pointer' }} className='flex-grow-1'>
        <p className={`p-2 w-24 text-center md:w-28  hover:bg-maroon rounded-sm text-xs md:text-xl lg:text-base  hover:text-white transition duration-300 ${
            showAll 
          }`} 
      onClick={handleAllClick}
      >
       Apartment
      </p>
        </div>
        <div style={{ cursor: 'pointer' }} className='flex-grow-1'>
        <p className={`p-2 w-24 text-center md:w-28  hover:bg-maroon rounded-sm text-xs md:text-xl lg:text-base  hover:text-white transition duration-300 ${
            showApartment 
          }`} 
      onClick={handleApartmentClick}
      >
       Apartment
      </p>
        </div>
        <div style={{ cursor: 'pointer' }} className='flex-grow-1'>
        <p className={`p-2 w-24 text-center md:w-28  hover:bg-maroon rounded-sm text-xs md:text-xl lg:text-base  hover:text-white transition duration-300 ${
            showArt 
          }`} 
          onClick={handleArtClick} >
      Event Center
      </p>
        </div>
        <div style={{ cursor: 'pointer' }} className='flex-grow-1'>
        <p className={`p-2 w-24 text-center md:w-28  hover:bg-maroon rounded-sm text-xs md:text-xl lg:text-base  hover:text-white transition duration-300 ${
            showArt 
          }`} 
          onClick={handleArtClick} >
      Office
      </p>
        </div>
        <div style={{ cursor: 'pointer' }} className='flex-grow-1'>
        <p className={`p-2 w-24 text-center md:w-28  hover:bg-maroon rounded-sm text-xs md:text-xl lg:text-base  hover:text-white transition duration-300 ${
            showArt 
          }`} 
          onClick={handleArtClick} >
      Gym
      </p>
        </div>

  
    
    </div>
    
    </div>
    </div>
    
   
    {showAll && (
          <div>
            {/* Render the card component for "All" option here */}
            <Apartment />
          </div>
        )}
        {showApartment && (
          <div>
            {/* Render the card component for "Adventures" option here */}
            <Apartment />
          </div>
        )}
   
    
     
    </div>
    </section>
  )
}

export default Page