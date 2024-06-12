import React, { useState, useEffect } from 'react'
import Header from '../Header/pages'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import styles from './page.module.css'
import blog from '../../../public/blog.png'
import { AiOutlineHeart, AiTwotoneHeart, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { BiComment, BiHeart } from 'react-icons/bi'
import { BsStar, BsStarFill } from 'react-icons/bs'
import Blogreview from './Blogreview/page'
import { IoMdSend } from "react-icons/io";
import { getRequest } from '@/library/request'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  const [blog, setBlog] = useState([]);

  const [details, setDetails] = useState([
    {
      id: 1,
      backimage: blog,
      text: "Partnering with Engineers for Innovation & Development",
      textone: "May 6, 2022 ",
      textwo: "1",
      texthree: "2",
      iconClicked: false, // Initial clicked state,
      starClicked: false,
      iconone: <AiOutlineHeart className={styles.icon} />,
      icontwo: <BsStar className={styles.icon} />,
      iconthree: <FaComment className={styles.icon} />
    },
    {
      id: 2,
      backimage: blog,
      text: "Partnering with Engineers for Innovation & Development",
      textone: "May 6, 2022 ",
      textwo: "5",
      texthree: "2",
      iconClicked: false, // Initial clicked state,
      starClicked: false,
      iconone: <AiOutlineHeart className={styles.icon} />,
      icontwo: <BsStar className={styles.icon} />,
      iconthree: <FaComment className={styles.icon} />
    },
    {
      id: 3,
      backimage: blog,
      text: "Partnering with Engineers for Innovation & Development",
      textone: "May 6, 2022 ",
      textwo: "10",
      texthree: "2",
      iconClicked: false, // Initial clicked state,
      starClicked: false,
      iconone: <AiOutlineHeart className={styles.icon} />,
      icontwo: <BsStar className={styles.icon} />,
      iconthree: <FaComment className={styles.icon} />
    },
    {
      id: 4,
      backimage: blog,
      text: "Partnering with Engineers for Innovation & Development",
      textone: "May 6, 2022 ",
      textwo: "12",
      texthree: "2",
      iconClicked: false, // Initial clicked state,
      starClicked: false,
      iconone: <AiOutlineHeart className={styles.icon} />,
      icontwo: <BsStar className={styles.icon} />,
      iconthree: <FaComment className={styles.icon} />
    },
    {
      id: 5,
      backimage: blog,
      text: "Partnering with Engineers for Innovation & Development",
      textone: "May 6, 2022 ",
      textwo: "5",
      texthree: "2",
      iconClicked: false, // Initial clicked state,
      starClicked: false,
      iconone: <AiOutlineHeart className={styles.icon} />,
      icontwo: <BsStar className={styles.icon} />,
      iconthree: <FaComment className={styles.icon} />
    },
    {
      id: 6,
      backimage: blog,
      text: "Partnering with Engineers for Innovation & Development",
      textone: "May 6, 2022 ",
      textwo: "12",
      texthree: "2",
      iconClicked: false, // Initial clicked state,
      starClicked: false,
      iconone: <AiOutlineHeart className={styles.icon} />,
      icontwo: <BsStar className={styles.icon} />,
      iconthree: <FaComment className={styles.icon} />
    },
  ])

  const [newComment, setNewComment] = useState('');
  const [activeCommentId, setActiveCommentId] = useState(null);

  const handleHeartClick = (item) => {
    // Create a new copy of the details array
    const updatedDetails = [...details];
    const index = updatedDetails.findIndex((detail) => detail.id === item.id);

    if (updatedDetails[index].iconClicked) {
      updatedDetails[index].iconone = <AiOutlineHeart className={styles.icon} />;
      updatedDetails[index].textwo--;
    } else {
      updatedDetails[index].iconone = <FcLike className={styles.icon} />;
      updatedDetails[index].textwo++;
    }



    updatedDetails[index].iconClicked = !updatedDetails[index].iconClicked;
    setDetails(updatedDetails);
  };

  const handleStarClick = (item) => {
    const updatedDetails = [...details];
    const index = updatedDetails.findIndex((detail) => detail.id === item.id);

    if (updatedDetails[index].starClicked) {
      updatedDetails[index].icontwo = <BsStar className={styles.icon} />;
    } else {
      updatedDetails[index].icontwo = <BsStarFill color='yellow' className={`${styles.icon} ${styles.yellow}`} />;
    }

    updatedDetails[index].starClicked = !updatedDetails[index].starClicked;

    setDetails(updatedDetails);
  };

  const handleCommentClick = (itemId) => {
    setActiveCommentId(itemId === activeCommentId ? null : itemId);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (item) => {
    const updatedDetails = [...details];
    const index = updatedDetails.findIndex((detail) => detail.id === item.id);

    // Add the new comment to the comments array
    updatedDetails[index].comments = updatedDetails[index].comments || [];
    updatedDetails[index].comments.push(newComment);

    // Clear the input field after submitting the comment
    setNewComment('');

    setDetails(updatedDetails);
    setActiveCommentId(null); // Close the input field after submitting the comment
  };

  useEffect(() => {
    getRequest("Blog/GetAllBlogsAsync").then((data) => setBlog(data.data.data.slice(0, 7))).catch((err) => console.log(err))
  }, [])
  console.log(blog)

  function truncateDescription(description, maxLength) {
    // Check if the description is longer than the maximum length
    if (description.length > maxLength) {
      // Truncate the description and add an ellipsis
      return `${description.substring(0, maxLength)}...`;
    } else {
      // If the description is already shorter, return it as is
      return description;
    }
  }

  return (
    <div className={styles.main} id='blogpost'>
      <div className={styles.label}>
        <p>Blog Post</p>
      </div>
      <div className={styles.cont}>
        {blog.map((item) => (
          <div key={item.id} className={styles.subcont}>
          <Link href="/BlogPage/[id]" as={`/BlogPage/${item.id}`}>
              <div className={styles.blog}>
                <div className={styles.textdiv}>
                  <p className={styles.text}>{item.title}</p>
                  <p className={styles.textone}>{truncateDescription(item.desccription, 200)}</p>
                  <p className={styles.textone}>{item.createdOn}</p>
                  <p className={styles.textsee}>See more</p>
                </div>
                <div className={styles.imgdiv}>
                  <Image src={item.imageUrl} width={500} height={500} style={{ width: '100%', height: '100%' }}  alt="pic" />
                </div>
              </div>
          </Link>
          </div>


        ))}
      </div>
    </div>
  )
}

export default Page