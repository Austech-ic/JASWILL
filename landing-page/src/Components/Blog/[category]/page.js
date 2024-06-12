import { useState, useEffect } from 'react';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';
import styles from './page.module.css';
import { getRequest } from '@/library/request';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

const Page = ({ id }) => {
  const [blog, setBlog] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getRequest(`Blog/GetBlog/${id}`)
      .then((response) => setBlog(response.data.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikesCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  const handleCommentIconClick = () => {
    setShowCommentInput(true);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleCommentSend = () => {
    if (comment.trim() === '' || userName.trim() === '') {
      return;
    }

    const newComment = {
      id: generateUniqueId(id),
      blogId: id,
      userName: userName,
      comment: comment,
    };

    setComments((prevComments) => [...prevComments, newComment]);

    const postData = {
      id: newComment.id,
      blogId: newComment.blogId,
      userName: newComment.userName,
      comment: newComment.comment,
    };

    fetch('https://jaswillrealestate.onrender.com/api/Admin/Comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Comment sent successfully:', data);
        setComment('');
        setUserName('');
        setShowCommentInput(false);
      })
      .catch((error) => {
        console.error('Error sending comment:', error);
      });
  };

  const generateUniqueId = (blogId) => {
    return `_${blogId}_${Math.random().toString(36).substr(2, 9)}`;
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
                  <Image
                    src={blog.imageUrl}
                    width={1000}
                    height={500}
                    style={{ width: '100%', height: '100%' }}
                    alt="pic"
                  />
                </div>
              </div>
              <div className={styles.textdiv}>
                <p className={styles.text}>{blog.title}</p>
                <p className={styles.textone}>{blog.desccription}</p>
                <p className={styles.textones}>{blog.createdOn}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
