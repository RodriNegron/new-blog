import React, {useState,useEffect} from 'react';
import PostCard from './PostCard';

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((parsedResponse)=>{
            setPosts(parsedResponse)
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