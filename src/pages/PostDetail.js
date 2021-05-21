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
            <div className="container py-5">
             <div className="text-center">
              <h1 className="display-7">React Blog</h1>
             </div>
              <div className="col-lg-7 mx-auto">
                <div className="card shadow mb-4">
                 <div className="card-body p-5">
                  <h4 className="mb-4">{post.title}</h4>
                    <ul className="list-unstyled">
                     <li className="mb-2">{post.body}</li>
                    </ul>
                   </div>
                </div>
        </div>
    </div>
</div>



    );
}

export default PostDetail;