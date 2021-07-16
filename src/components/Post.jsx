import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {
  const notify = () => toast("Wow so easy!");

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
  };

  useEffect(() => {
    getPosts
  }, []);

  return (
    <div>
      <ToastContainer />
      <button onClick={notify}>Notify!</button>
      Posts:
      {posts.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
};

export default Post;
