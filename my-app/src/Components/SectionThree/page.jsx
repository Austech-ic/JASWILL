import { useState, useEffect }  from 'react'
import styles from './page.module.css'
import Office from '../SectionThree/office'
import General from '../SectionThree/general'
import Apartment from './apartment'
import { getRequest } from '@/library/request'
import axios from 'axios'


const Page = () => {
  const [property, setProperty] = useState([]);

    const [showAll, setShowAll] = useState(false);
    const [showAdventure, setShowAdventure] = useState(false);
    const [showArt, setShowArt] = useState(false);
    const [showFood, setShowFood] = useState(false);
    const [showSpa, setShowSpa] = useState(false);
    const [showSight, setShowSight] = useState(false);


    const [apartments, setApartments] = useState([]);
    const [filteredApartments, setFilteredApartments] = useState([]);
    const [category, setCategory] = useState('');


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://jaswillrealestate.onrender.com/api/Category/GetAllCategory');
        const data = await response.json();
        console.log('Fetched apartments:', data);
        if (data.success && Array.isArray(data.data)) {
          setApartments(data.data);
          setFilteredApartments(data.data);
        } else {
          console.error('Error: Fetched data is not an array');
        }
      } catch (error) {
        console.error('Error fetching apartments:', error);
      }
    })();
  }, []);



  // const fetchApartments = async () => {
  //   try {
  //     const response = await fetch('https://jaswillrealestate.onrender.com/api/Category/GetAllCategory');
  //     const data = await response?.json();
  //     setApartments(data);
  //     setFilteredApartments(data);
  //   } catch (error) {
  //     console.error('Error fetching apartments:', error);
  //   }
  // };


  const handleCategoryChange = (selectedCategory) => {
    // const selectedCategory =target?.value;
    setCategory(selectedCategory);
    if (selectedCategory === '') {
      setFilteredApartments(apartments);
    } else {
      const filtered = apartments.filter(apartment => apartment.categoryName === selectedCategory);
      setFilteredApartments(filtered);
    }
  };


    const handleAllClick = () => {
      setShowAll(true);
      setShowAdventure(false);
      setShowArt(false);
      setShowFood(false);
      setShowSpa(false);
      setShowSight(false);
    };
  
    const handleAdventureClick = () => {
      setShowAll(false);
      setShowAdventure(true);
      setShowArt(false);
      setShowFood(false);
      setShowSpa(false);
      setShowSight(false);
    };
  
    const handleArtClick = () => {
      setShowAll(false);
      setShowAdventure(false);
      setShowArt(true);
      setShowFood(false);
      setShowSpa(false);
      setShowSight(false);
    };
  
    const handleFoodDrinkClick = () => {
      setShowAll(false);
      setShowAdventure(false);
      setShowArt(false);
      setShowFood(true);
      setShowSpa(false);
      setShowSight(false);
    };
  
    const handleSpaWellnessClick = () => {
      setShowAll(false);
      setShowAdventure(false);
      setShowArt(false);
      setShowFood(false);
      setShowSpa(true);
      setShowSight(false);
    };
  
    const handleSightAttractionClick = () => {
      setShowAll(false);
      setShowAdventure(false);
      setShowArt(false);
      setShowFood(false);
      setShowSpa(false);
      setShowSight(true);
    };

    
  
    return (
      <section className=' px-10 md:py-10 md:px-20 lg:px-20 xl:px-24' id='properties' data-aos="flip-down">
        <div>
          <div className='mt-5'>
            <p className='text-center py-2 text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-medium'>Explore By Property Type</p>
          </div>
          <div className='overflow-x-auto '>
    <div >
      <div style={{ cursor: 'pointer' }} className='flex items-center cursor-pointer p-5' >
      {apartments?.map((apartment, index) => (
          <div onClick={() => handleCategoryChange(apartment.categoryName)} style={{ cursor: 'pointer' }} className='flex-grow-1'>
            <p className={`p-2 w-24 text-center md:w-28  hover:bg-maroon rounded-sm text-sm md:text-xl lg:text-base  hover:text-white transition duration-300 ${
            showAll ? 'bg-maroon text-white' : ''
          }`} key={index}>
            {apartment.categoryName}
          </p>
            </div>
        ))}
        
      </div>
      
    </div>
  </div>

  {filteredApartments.map((apartment, index) => ( 
   <General className='flex flex-row' apartment={apartment} index={index} />
))}
  
         
        </div>
      </section>
    );
  };

export default Page