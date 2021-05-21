import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PostCard() {
  const posts = useSelector((state) => state.allPosts.posts);
  const renderList = posts.map((post) =>{
    const {id, title} = post;
    return (<div className="col-md-4 mb-3" key={id}>
    <div className="card border-0 shadow">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="btn-group">
          <Link to={`/${id}`}>
            <a 
              href="/PostDetail"
              className="btn  btn-outline-success btn-sm">
              Read More
            </a>
          </Link>
          <div className="btn-group">
            <Link to={`/${id}`}>
              <a
                href="/PostDetail"
                className="btn btn-outline-secondary btn-sm far fa-edit"
              ></a>
            </Link>
            <Link to={`/${id}`}>
              <a
                href="/PostDetail"
                className="btn btn-outline-danger btn-sm far fa-trash-alt"
              ></a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

    )
  })
  return (
    <>{renderList}</>
  );
}

export default PostCard;
