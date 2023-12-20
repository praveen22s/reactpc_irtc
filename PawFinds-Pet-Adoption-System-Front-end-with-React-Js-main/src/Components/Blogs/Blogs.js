import React, { useState } from 'react';
import './Blogs.css';
import BlogContentViewer from './BlogContentViewer';
import blogsData from './blogs.json';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(blogsData[0]);

  return (
    <div className='main-container'>
      <div className='titles-container'>
        {blogsData.map((blog, index) => (
          <p key={index} onClick={() => setSelectedBlog(blog)}>
            {blog.title}
          </p>
        ))}
      </div>
      <div className='blog-container'>
        <BlogContentViewer blog={selectedBlog} />
      </div>
    </div>
  );
};

export default Blogs;
