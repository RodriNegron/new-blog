import React, { useState } from 'react';
import NavBar from '../components/NavBar'
import { createPost } from '../services/posts';

const NewPost = () => {
    const [newPost, setNewPost] = useState('')

    const handleChange = (event)=>{
        setNewPost(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const postToAdd = {
            title: newPost,
            body: newPost
        }

        createPost(postToAdd)
    }

    return (
        
        <div >
            <NavBar/>
            <div>

            </div>
            
            <div className="container py-5">
             <div className="text-center">
              <h1 className="display-7">Create new post</h1>
             </div>
              <div className="col-lg-7 mx-auto">
                <div className="card shadow mb-4">
                 <div className="card-body p-5">
                  
                  <form onSubmit={handleSubmit}>
        		    
    		    <div className="form-group">
    		        <label for="title">Title <span className="require">*</span></label>
                    <input type='text' className="form-control" onChange={handleChange} value={newPost} required></input>	    
    		    </div>
    		    
    		    <div className="form-group">
    		        <label for="description">Description</label>
    		        <textarea rows="5" className="form-control" name="description" ></textarea>
    		    </div>
    		        		    
    		    <div className="form-group m-2">
    		        <button type="submit" className="btn btn-primary">
    		            Create
    		        </button>
    		        <button className="btn btn-default">
    		            Cancel
    		        </button>
    		    </div>
    		    </form>
             </div>
		</div>
		</div>
	</div>
</div>
    );
}

export default NewPost;