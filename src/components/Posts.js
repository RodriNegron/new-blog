import React, {useState,useEffect} from 'react';
import PostCard from './PostCard';
import { getAllPosts } from '../services/getAllPosts';

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        getAllPosts()
        .then(posts =>{
            setPosts(posts)
        })
    }, [])

    return (
    <div className="py-5">
        <div className="container">
            <div className="row hidden-md-up">
                {
                     posts.map( (row,i) =>{
                        return <PostCard {...row} key={i}/>
                    }) 
                }
            </div>
        </div>
    </div>
    );
}

export default Posts;