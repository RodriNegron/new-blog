import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { detail } from '../services/posts';

const PostDetail = () => {

    const {id}=useParams();

    const [post, setPost] = useState([]);

    useEffect(() =>{
        detail(id)
        .then(post =>{
            setPost(post)
        })
    }, [])

    return (
        <div>
            <NavBar/>
            <div className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" >{post.title}</h5>
                        <p className="card-title" >{post.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetail;