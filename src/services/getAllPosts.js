import axios from 'axios';

export const getAllPosts = () =>{
    const request = axios.get('https://jsonplaceholder.typicode.com/posts')
    return request.then(response =>response.data)
}