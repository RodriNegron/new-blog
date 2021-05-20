import axios from 'axios';

export const updatePost = (id, newObject) =>{
    const request = axios.put(`${'https://jsonplaceholder.typicode.com/posts'}/${id}`, newObject)
    return request.then(response => response.data)
}