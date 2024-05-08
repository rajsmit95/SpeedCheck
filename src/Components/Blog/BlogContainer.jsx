import React from 'react'
import { Link } from 'react-router-dom';


function BlogContainer() {
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
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
    {
        imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        title : 'Mahendra Sing Dhoni',
    },
]
  return (
       <>
        {
            BlogData.map((item) => {
                    return (
                        <div key={item.id} className='w-[350px] h-[350px] rounded-2xl bg-slate-500'>
                            <div className='w-full h-[70%] rounded-t-2xl'>
                                <img src={item.imgLink} alt="imga_conati" className='w-full h-full rounded-t-2xl' />
                            </div>
                            <div className=''>
                            <Link to={`/blog/${item.id}`} className='text-[30px] font-[600] px-1 mt-2'>{item.title}</Link>
            
                            </div>
                        </div>
                    )
    
                    
            })
        }
       </>
  )
}

export default BlogContainer
