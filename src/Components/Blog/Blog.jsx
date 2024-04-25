import React from 'react'
import Navbar from '../Navbar'
import BlogContainer from './BlogContainer'
import Footer from '../Footer'

function Blog() {
  return (
    <div>
        <Navbar  />
        <h3 className='text-[50px] font-900 text-slate-300 p-3'>Blog</h3>
        {/* This is blog-conatiner */}
        <div className='w-[1200px]  mx-auto my-6 grid grid-cols-3 gap-y-4 gap-x-10 p-2'>
            <BlogContainer />
        </div>
        {/* This is button */}
        <div className='my-2 py-5'>
            <button className='bg-slate-600 p-3 rounded-lg text-slate-200 font-[700]'>Load more</button>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Blog
