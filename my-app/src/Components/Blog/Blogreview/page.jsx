import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Page = ({ filled, setFilled }) => {
    const [starClicked, setStarClicked] = useState([false, false, false]);

  const handleStarClick = (index) => {
    const newStarClicked = [...starClicked];
    newStarClicked[index] = !newStarClicked[index];
    setStarClicked(newStarClicked);
  };
  return (
    <div className='flex flex-row md:flex-col justify-start items-center'>
       {starClicked[0] ? (
            <AiFillStar
              size={25}
              className='text-gray-600'
              onClick={() => handleStarClick(0)}
            />
          ) : (
            <AiOutlineStar
              size={25}
              className='text-gray-600'
              onClick={() => handleStarClick(0)}
            />
          )}
          </div>
  )
}

export default Page