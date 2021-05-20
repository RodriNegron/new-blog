import React, { useState } from 'react';
import NavBar from '../components/NavBar'
import { createPost } from '../services/createPosts';

const NewPost = () => {
    const [newPost, setNewPost] = useState('')

    const handleChange = (event)=>{
        setNewPost(event.target.value)
    }

    /* const {token} = user */

    const handleSubmit = (event)=>{
        event.preventDefault();
        const postToAdd = {
            title: newPost,
            body: newPost
        }

        createPost(postToAdd, /* {token} */)
    }

    return (
        <div >
            <NavBar/>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newPost}></input>
                <button>Post new entry</button>
            </form>
        </div>
    );
}

export default NewPost;