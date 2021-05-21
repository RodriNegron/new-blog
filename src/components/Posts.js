import React, { useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/actions/postsActions";

function Posts() {
  const posts = useSelector((state) => state)
  const dispatch = useDispatch();

  const fetchPosts = async () =>{
    const res = await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .catch((error) =>{
      console.log('Error', error);
    });
    dispatch(setPosts(res.data))
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row hidden-md-up">
          <PostCard/>;
        </div>
      </div>
    </div>
  );
}

export default Posts;
