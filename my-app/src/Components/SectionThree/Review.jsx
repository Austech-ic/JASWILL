import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai'


const Review = ({ filled, setFilled }) => {
  const [starClicked, setStarClicked] = useState([false, false, false]);

  const handleStarClick = (index) => {
    const newStarClicked = [...starClicked];
    newStarClicked[index] = !newStarClicked[index];
    setStarClicked(newStarClicked);
  };
 
  return (
    <div className='flex flex-row md:dlex-col justify-start items-center'>
          {starClicked[0] ? (
            <AiFillStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(0)}
            />
          ) : (
            <AiOutlineStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(0)}
            />
          )}

          {starClicked[1] ? (
            <AiFillStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(1)}
            />
          ) : (
            <AiOutlineStar
              size={25} 
              className='text-maroon'
              onClick={() => handleStarClick(1)}
            />
          )}

          {starClicked[2] ? (
            <AiFillStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(2)}
            />
          ) : (
            <AiOutlineStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(2)}
            />
          )}

          {starClicked[3] ? (
            <AiFillStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(3)}
            />
          ) : (
            <AiOutlineStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(3)}
            />
          )}

          {starClicked[4] ? (
            <AiFillStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(4)}
            />
          ) : (
            <AiOutlineStar
              size={25}
              className='text-maroon'
              onClick={() => handleStarClick(4)}
            />
          )}
          {/* Add more star icons as needed */}
        </div>
  )
}

export default Review