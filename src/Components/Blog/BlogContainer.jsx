import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import GenuisBoy from '../../assests/Genuis-guy.jpg'


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
        imgLink : GenuisBoy,
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
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        id:6,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        id:7,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        id:8,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        id:9,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
]

  return (
    <>
      {
        BlogData.slice(0, visibleCount).map((item) => {
          return (
            <div key={item.id} className={`w-[350px] h-auto mx-auto rounded-2xl ${ isBlog ? "bg-[#090a3a] shadow-lg" : "bg-none shadow-none"}`}>
              <div className={`'w-full h-[60%] rounded-t-2xl ${isBlog ? "block" : "hidden"}`}>
                <img src={item.imgLink} alt="imga_conati" className='w-full h-full rounded-t-2xl' />
              </div>
              <div className='mt-0 px-1'>
                <Link to={`/blog/${item.id}`} className={`text-[20px] hover:underline font-[600] px-1  ${isBlog ? "text-slate-100": "text-slate-700"}`}>{isBlog ? <p className='mb-5 line-clamp-2 text-center'>{item.title}</p> : <li className='text-left'>{item.title}</li>}</Link>
              </div>
            </div>
          );
        })
      }
    </>
  );
}

export default BlogContainer;
