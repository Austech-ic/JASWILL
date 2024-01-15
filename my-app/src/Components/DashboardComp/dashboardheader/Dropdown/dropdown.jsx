import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
// import me from '../images/me.jpeg'
import { MdEventRepeat, MdOutlineKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineTeam, AiFillSetting, AiOutlineLogout} from 'react-icons/ai';
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import { getRequest } from '@/library/request'
import { BiLogOut, BiLogOutCircle, BiNotification, BiSolidToggleRight, BiUserCircle } from 'react-icons/bi'

const Dropdown = ({counter}) => {
  const [details, setDetails] = useState({ userName: '', email: '' });
  const [id, setId] = useState(1); // Set the initial value of id




    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    // logout
    const handleLogout = async () => {
      try {
        // Make a request to your logout API endpoint
        await axios.get('https://jaswillrealestate.onrender.com/api/Admin/Logout');
    
        // Replace the current history entry with the login page's URL
        window.history.replaceState(null, null, '/signin');
    
        // Redirect the user to the sign-in page
        window.location.href = '/signin'; // Replace '/signin' with the actual path of your sign-in page
      } catch (error) {
        // Handle errors, e.g., show an error message to the user
        console.error('Logout failed:', error);
      }
    };
    
    

      useEffect(() => {
        // Fetch user details after successful login
        const fetchUserDetails = async () => {
          try {
            const id = getUserId(); // Replace with the actual function to get user ID after login
            const response = await getRequest(`Admin/GetAdminUserNameAndEmail/${id}`);
            const userData = response.data.data;
            setDetails(userData);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchUserDetails();
      }, [counter]); // Fetch details when the counter changes (e.g., after login)
    
      const getUserId = () => {
        // Replace with the actual function to get user ID after login
        return 1; // Default value, update as per your logic
      };


    
  return (
    <div className="relative flex justify-end">
          <div className="">
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-start items-center bg-white text-blue gap-2 w-full px-2 py-1 md:py-2 md:px-3 lg:py-1 text-sm md:text-medium lg:text-max xl:text-medium font-medium leading-5 transition duration-150 ease-in-out hover:text-bluehover:bg-blue  border border-transparent rounded-md focus:outline-none focus:border-blue  focus:shadow-outline-indigo"
                id="dropdown-menu-button"
                aria-expanded="true"
                aria-haspopup="true"
               
              >
                {/* <img  src={me} alt='pic' className="h-6 w-6 lg:h-8 lg:w-8 xl:h-9 xl:w-9 rounded-full" /> */}
               <p id="dropdown-menu-button"
                 onClick={toggleDropdown} 
                 className="text-sm  md:text-large xl:text-large"> {details.userName}</p>
               {/* <MdKeyboardArrowDown /> */}
              </button>
            </span>
          </div>

          {isOpen && (
            <div className=" absolute top-10 right-0 mt-2  rounded-md shadow-lg">
              <div className="rounded-md bg-white shadow-xs">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu-button">
                 
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 hover:bg-blue  px-4 py-2 text-sm md:text-medium lg:text-max xl:text-medium text-blue  hover:text-white"
                    role="menuitem"
                  >
                    <FaUserCircle />
                   <p className="text-sm  md:text-large xl:text-large">{details.email}</p>
                  </a>
                  <a
                    href="#"
                    onClick={handleLogout}
                    className="flex justify-start items-center gap-2 hover:bg-blue  px-4 py-2 text-sm md:text-medium lg:text-max xl:text-medium text-blue hover:text-white"
                    role="menuitem"
                    
                  >
                    <BiLogOutCircle  />
                   <p className="text-sm  md:text-large xl:text-large">Logout</p>
                  </a>
    
                </div>
              </div>
            </div>
          )}
        </div>

  )
}

export default Dropdown