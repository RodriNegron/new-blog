import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card border-0 shadow">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="btn-group">
            <Link to={`/${props.id}`}>
              <a href="/PostDetail" className="btn  btn-outline-success btn-sm">
                Read More
              </a>
            </Link>
            <div className="btn-group">
              <a
                href="/PostDetail"
                className="btn btn-outline-secondary btn-sm far fa-edit"
              ></a>
              <a
                href="/PostDetail"
                className="btn btn-outline-danger btn-sm far fa-trash-alt"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
