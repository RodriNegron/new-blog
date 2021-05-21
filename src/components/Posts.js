import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { deletePost, getAllPosts } from "../services/posts";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const allPosts = await getAllPosts();
      if (allPosts) setPosts(allPosts);
    };
    getAll();
  }, []);

  /* const id =2; */

  const removePostHandler = async (id) => {
    await deletePost(id);
    const postList = posts.filter((post) => {
      return post.id != id;
    });
    setPosts(postList);
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row hidden-md-up">
          {posts.map((row, i) => {
            return <PostCard {...row} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
