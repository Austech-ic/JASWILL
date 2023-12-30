import { useState, useEffect } from 'react';
import Navbar from '../../Navbar/navbar'
import Footer from '../../Footer/footer'
import styles from './page.module.css'
import { getRequest } from '@/library/request'
import Image from 'next/image'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { BiComment, BiHeart } from 'react-icons/bi'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { IoMdSend } from "react-icons/io";


const Page = ({id}) => {
    const [blog, setBlog] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);




    useEffect(() => {
      getRequest(`Blog/GetBlog/${id}`)
        .then((response) => setBlog(response.data.data))
        .catch((error) => console.log(error));
    }, [id]);
  
    console.log(blog);


    const handleLikeClick = () => {
      // Update the state to toggle between liked and not liked
      setIsLiked(!isLiked);
      // Increment or decrement the like count based on the current state
      setLikesCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
    };

    const handleCommentIconClick = () => {
      setShowCommentInput(true);
    };
  
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };
  
    const handleCommentSend = () => {
      setComments((prevComments) => [...prevComments, comment]);
      setComment('');
      setShowCommentInput(false);
    };
    

  return (
     <div>
      <Navbar />
      <div className={styles.main} id='blogpost'>
      <div className={styles.label}>
        <p className=''>Blog Post</p>
      </div>
      <div className={styles.cont}>
        
          <div className={styles.subcont}>

            <div className={styles.blog}>
            <div className='w-full'>
            <div className={styles.imgdiv}>
                <Image src={blog.imageUrl} width={1000} height={500} style={{ width: '100%', height: '100%' }} alt="pic" />
              </div>
            </div>
              <div className={styles.textdiv}>
                <p className={styles.text}>{blog.title}</p>
                <p className={styles.textone}>{blog.desccription}
                </p>
                <p className={styles.textone}>{blog.createdOn}
                </p> 
                <div className='flex items-center gap-3'>
                <div className='flex items-center'>
                {likesCount > 0 && <span>{likesCount}</span>}
                {isLiked ? (
                    <AiFillHeart className={styles.icon} color='red' onClick={handleLikeClick} />
                  ) : (
                    <AiOutlineHeart className={styles.icon} onClick={handleLikeClick} />
                  )}
                </div>
              <FaComment onClick={handleCommentIconClick} className={styles.icon} />
              </div> 
              <div>
                  {/* Display existing comments */}
                  {comments.map((comment, index) => (
                   
                    <p className='mt-1 text-xs md:text-lg lg:text-xs xl:text-sm' key={index}>Comment: {comment}</p>
                  ))}
                  {/* Comment input and send button */}
                  {showCommentInput && (
                    <div className='flex gap-2 mt-3'>
                      <input type='text' value={comment} className='outline-none border border-red-400 rounded-lg p-1 text-sm'  onChange={handleCommentChange} placeholder='Type your comment' />
                      <button onClick={handleCommentSend}>
                        <IoMdSend color='red' />
                        </button>
                    </div>
                  )}
                </div>


              
                        
              </div>
              
              
              
            </div>
            
            
          </div>
       
      </div>
    </div>
    <Footer />
     </div>
  )
}

export default Page