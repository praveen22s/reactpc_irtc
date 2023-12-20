import React from 'react';
import './BlogContentViewer.css'

const BlogContentViewer = (props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.blog.description }} />
    </div>
  );
};

export default BlogContentViewer;
