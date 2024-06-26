import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GenuisBoy from '../../assests/Genuis-guy.jpg'
import Boy from '../../assests/Doctor.jpg'


function BlogContainer({ visibleCount }) {
    const location = useLocation()
    // Now Check  the rounting
     const isBlog = location.pathname === "/blog";
  // Assuming BlogData is defined here as you provided in the previous code
  const BlogData =[
    {
        id:1,
        imgLink: GenuisBoy,
        title : 'Demystifying Artificial Intelligence: Understanding the Basics',
    },
    { 
        id:2,
        imgLink : Boy,
        title : 'The Impact of AI on Everyday Life: From Virtual Assistants to Autonomous Vehicles',
    },
    {
        id:3,
        imgLink : GenuisBoy,
        title : 'Ethical Considerations in AI Development and Deployment',
    },
    {
        id:4,
        imgLink :GenuisBoy,
        title : 'AI and Healthcare: Revolutionizing Diagnosis, Treatment, and Patient Care',
    },
    {
        id:5,
        imgLink : GenuisBoy,
        title : 'The Future of Work: How AI is Reshaping Industries and Job Roles',
    },
    {
        id:6,
        imgLink : GenuisBoy,
        title : 'AI in Finance: Transforming Banking, Investing, and Risk Management',
    },
    {
        id:7,
        imgLink : GenuisBoy,
        title : 'Exploring the Intersection of AI and Creativity: From Art to Music Composition',
    },
    {
        id:8,
        imgLink : GenuisBoy,
        title : 'The Role of AI in Environmental Conservation and Sustainability',
    },
    {
        id:9,
        imgLink : GenuisBoy,
        title : 'AI in Education: Transforming Learning and Teaching Practices',
    },
]

  return (
    <>
      {
        BlogData.slice(0, visibleCount).map((item) => {
          return (
            <div key={item.id} className={`w-[350px] h-auto mx-auto rounded-2xl ${ isBlog ? "bg-[#090a3a] shadow-lg" : "bg-none shadow-none"}`}>
              <div className={`'w-full h-auto rounded-t-2xl ${isBlog ? "block" : "hidden"}`}>
                <img src={item.imgLink} alt="imga_conati" className='w-full h-full rounded-t-2xl' />
              </div>
              <div className='mt-0 px-1'>
                <Link to={`/blog/${item.id}`} className={`hover:underline font-[600] px-1  ${isBlog ? "text-slate-100": "text-blue-700 mb-0"}`}>{isBlog ? <p className='mb-5 line-clamp-2 text-center text-[20px]'>{item.title}</p> : <li className='text-left text-[16px] md:text-[18px] font-[500px] mb-[-30px]'>{item.title}</li>}</Link>
              </div>
            </div>
          );
        })
      } 
    </>
  );
}

export default BlogContainer;
