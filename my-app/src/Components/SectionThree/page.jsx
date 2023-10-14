import { useState }  from 'react'
import styles from './page.module.css'
import Office from '../SectionThree/office'
import General from '../SectionThree/general'


const page = () => {
    const [showAll, setShowAll] = useState(false);
    const [showAdventure, setShowAdventure] = useState(false);
    const [showArt, setShowArt] = useState(false);
    const [showFood, setShowFood] = useState(false);
    const [showSpa, setShowSpa] = useState(false);
    const [showSight, setShowSight] = useState(false);
  
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
      <section className='px-5 max-h-[150vh] md:p-10 lg:h-[120vh] xl:h-[90vh] '>
        <div>
          <div className='mt-5'>
            <p className='text-center py-2 text-2xl md:text-3xl lg:text-3xl xl:text-4xl'>Explore By Property Type</p>
          </div>
          <div className='overflow-x-auto'>
    <div className='flex justify-between items-center cursor-pointer p-5'>
      <div className='flex-grow-1'>
        <p
          className={`p-2 w-24 text-center md:w-24  hover:bg-maroon rounded-sm hover:text-white transition duration-300 ${
            showAll ? 'bg-maroon text-white' : ''
          }`}
          onClick={handleAllClick}
        >
          All
        </p>
      </div>
      <div className='flex-grow-1'>
        <p
          className={`p-2 w-24 text-center md:w-24 hover:bg-maroon rounded-sm hover:text-white transition duration-300 ${
            showAdventure ? 'bg-maroon text-white' : ''
          }`}
          onClick={handleAdventureClick}
        >
         Apartment
        </p>
      </div>
      <div className='flex-grow-1'>
        <p
          className={`p-2 w-24 text-center md:w-24 hover:bg-maroon rounded-sm hover:text-white transition duration-300 ${
            showArt ? 'bg-maroon text-white' : ''
          }`}
          onClick={handleArtClick}
        >
          Vila
        </p>
      </div>
      <div className='flex-grow-1'>
        <p
          className={`p-2 w-24 text-center md:w-24 hover:bg-maroon rounded-sm hover:text-white transition duration-300 ${
            showFood ? 'bg-maroon text-white' : ''
          }`}
          onClick={handleFoodDrinkClick}
        >
          Studio
        </p>
      </div>
      <div className='flex-grow-1'>
        <p
          className={`p-2 w-24 text-center md:w-24 hover:bg-maroon rounded-sm hover:text-white transition duration-300 ${
            showSpa ? 'bg-green-600 text-white' : ''
          }`}
          onClick={handleSpaWellnessClick}
        >
          Office
        </p>
      </div>
      <div className='flex-grow-1'>
        <p
          className={`p-2 w-24 text-center md:w-24 hover:bg-maroon rounded-sm hover:text-white transition duration-300 ${
            showSight ? 'bg-maroon text-white' : ''
          }`}
          onClick={handleSightAttractionClick}
        >
        Gym
        </p>
      </div>
    </div>
  </div>
  
          {showAll && (
            <div>
              {/* Render the card component for "All" option here */}
              <General />
            </div>
          )}
          {showAdventure && (
            <div>
              {/* Render the card component for "Adventures" option here */}
              <Office />
            </div>
          )}
          {showArt && (
            <div>
              {/* Render the card component for "Art & Culture" option here */}
              <Office />
            </div>
          )}
          {showFood && (
            <div>
              {/* Render the card component for "Food and Drink" option here */}
              <Office />
            </div>
          )}
          {showSpa && (
            <div>
              {/* Render the card component for "Spas & Wellness" option here */}
              <Office />
            </div>
          )}
          {showSight && (
            <div>
              {/* Render the card component for "Sights & Attractions" option here */}
              <Office />
            </div>
          )}
          {!showAll && !showAdventure && !showArt && !showFood && !showSpa && !showSight && (
            <div>
              {/* Render the default component here */}
              <Office />
            </div>
          )}
        </div>
      </section>
    );
  };

export default page