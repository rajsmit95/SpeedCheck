import React, { useState } from 'react';
import Navbar from '../Navbar';
import BlogContainer from './BlogContainer';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

function Blog() {
  const [visibleCount, setVisibleCount] = useState(6); // Initial count of visible items
  const location = useLocation()
  // Now Check  the rounting
   const isBlog = location.pathname === "/blog";

  const handleLoadMore = () => {
    // Increment the visible count by the number of items you want to load each time
    setVisibleCount(prevCount => prevCount + 3); // You can adjust this value as per your requirement
  };

  return (
    <div>
      <Navbar />
      <h3 className='text-[35px] md:text-[60px] font-900 text-slate-800 p-5 text-center'>Our's Blog</h3>
      {/* This is blog-container */}
      <div className={`w-full md:w-[1200px] mx-auto my-1 grid grid-cols-1 md:grid-cols-3 ${isBlog ? "gap-y-4 p-2 gap-x-10" : "gap-y-0 p-2 gap-x-4"}`}>
        <BlogContainer visibleCount={visibleCount} />
      </div>
      {/* This is button */}
      <div className='my-2 py-5 text-center'>
        <button className='bg-slate-600 p-3 rounded-lg text-slate-200 font-[700]' onClick={handleLoadMore}>Load more</button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
