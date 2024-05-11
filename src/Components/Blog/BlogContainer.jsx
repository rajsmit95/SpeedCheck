import React from 'react';
import { Link } from 'react-router-dom';

function BlogContainer({ visibleCount }) {
  // Assuming BlogData is defined here as you provided in the previous code
  const BlogData =[
    {
        id:1,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    { 
        id:2,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        id:3,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        id:4,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        id:5,
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        id:5,
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
            <div key={item.id} className='w-[350px] h-[350px] rounded-2xl bg-slate-800 shadow-lg'>
              <div className='w-full h-[70%] rounded-t-2xl'>
                <img src={item.imgLink} alt="imga_conati" className='w-full h-full rounded-t-2xl' />
              </div>
              <div className='mt-5 text-center'>
                <Link to={`/blog/${item.id}`} className='text-[25px] hover:underline font-[600] px-1 mt-2 text-slate-100'>{item.title}</Link>
              </div>
            </div>
          );
        })
      }
    </>
  );
}

export default BlogContainer;
