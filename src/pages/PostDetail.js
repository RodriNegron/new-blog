import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { selectedPost,removeSelectedPost } from "../redux/actions/postsActions";

const PostDetail = () => {
  const post = useSelector((state) => state.posts);
  const { title,body } = post;
  console.log("post",post)
  const { id } = useParams();
  const dispatch = useDispatch();

   const fetchPostDetail = async () => {
    const res = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .catch((error) =>{
      console.log("Error", error)
    })
    dispatch(selectedPost(res.data));
    //console.log("res",res.data)
  };

  useEffect(() => {
    if(id) fetchPostDetail();
    return () =>{
      dispatch(removeSelectedPost());
    }
  }, [id]);


  return (
    <div>
      <NavBar />
      {
        Object.keys(post).length===0 ? (
          <div>...Loading</div>
        ): (
      <div className="container py-5">
        <div className="text-center">
          <h1 className="display-7">React Blog</h1>
        </div>
        <div className="col-lg-7 mx-auto">
          <div className="card shadow mb-4">
            <div className="card-body p-5">
              <h4 className="mb-4">{title}</h4>
              <ul className="list-unstyled">
                <li className="mb-2">{body}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default PostDetail;
