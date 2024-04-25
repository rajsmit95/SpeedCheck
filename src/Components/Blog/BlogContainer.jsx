import React from 'react'

function BlogContainer() {
    const BlogData =[
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
            BlogData.map((item,index) => {
                    return (
                        <div key={index} className='w-[350px] h-[350px] rounded-2xl bg-slate-500'>
                            <div className='w-full h-[70%] rounded-t-2xl'>
                                <img src={item.imgLink} alt="imga_conati" className='w-full h-full rounded-t-2xl' />
                            </div>
                            <div className=''>
                                <h3 className='text-[30px] font-[600] px-1 mt-2'>{item.title}</h3>
                            </div>
                        </div>
                    )
    
                    
            })
        }
       </>
  )
}

export default BlogContainer
