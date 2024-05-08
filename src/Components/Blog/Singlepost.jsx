import React from "react";
import { useParams } from "react-router-dom";

function Singlepost() {
  const { id } = useParams();

  const blogPosts = [
    {
      id:1,
      imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      title : 'Mahendra Sing Dhoni',
      content : 'Lorem ispusme 300'
  },
  { 
      id:2,
      imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      title : 'Mahendra Sing Dhoni',
      content : 'Lorem ispusme 300'
  },
  {
      id:3,
      imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      title : 'Mahendra Sing Dhoni',
      content : 'Lorem ispusme 300'
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
      content : 'Lorem ispusme 300'
  },
  {
      id:5,
      imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      title : 'Mahendra Sing Dhoni',
      content : 'Lorem ispusme 300'
  },
  {
      id:7,
      imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      title : 'Mahendra Sing Dhoni',
      content : 'Lorem ispusme 300'
  },
  {
      id:8,
      imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      title : 'Mahendra Sing Dhoni',
      content : 'Lorem ispusme 300'
  },
  {
      id:9,
      imgLink : "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      title : 'Mahendra Sing Dhoni',
      content : 'Lorem ispusme 300'
  },
    
  ];

  // Find the blog post with the matching ID
  const blogPost = blogPosts.find(post => post.id === parseInt(id));

  // If no blog post is found, display a message
  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <div>
          
      </div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
}

export default Singlepost;
