import React from "react";
import { useParams } from "react-router-dom";

function Singlepost() {
  const { id } = useParams();

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content for Blog Post 1' },
    { id: 2, title: 'Blog Post 2', content: 'Content for Blog Post 2' },
    // Add more blog post data as needed
  ];

  // Find the blog post with the matching ID
  const blogPost = blogPosts.find(post => post.id === parseInt(id));

  // If no blog post is found, display a message
  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
}

export default Singlepost;
