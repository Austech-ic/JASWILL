import React from 'react';
import { useRouter } from 'next/router';
import EachBlog from '../../Components/Blog/EachBlog/page'
import SingleBlog from '../../Components/Blog/[category]/page'

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    // Handle loading or error state
    return null;
  }

  return <SingleBlog id={id} />;
};

export default BlogPost;