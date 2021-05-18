import React from 'react';


function PostCard(props){
    return (

    
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.body}</p>
                            <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                            <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
                        </div>
                    </div>
                </div>

    )
}
    
        
export default PostCard;