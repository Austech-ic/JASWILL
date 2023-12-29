import React from 'react';
import { useRouter } from 'next/router';
import EachBlog from '../../Components/Blog/EachBlog/page'

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    // Handle loading or error state
    return null;
  }

  return < EachBlog id={id} />;
};

export default BlogPost;