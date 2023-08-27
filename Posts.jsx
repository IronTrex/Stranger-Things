import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, [page]); // Fetch posts when page changes

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT/posts`);
      const data = await response.json();
      // Append new posts to existing posts
      setPosts((prevPosts) => [...prevPosts, ...data.data]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleLoadMore = () => {
    // Increment the page to load more posts
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default Posts;