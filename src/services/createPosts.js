import axios from 'axios';

export const createPost = (newObject/* , {token} */) =>{
    /* const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    } */
    const request = axios.post('https://jsonplaceholder.typicode.com/posts', newObject/* , config */)
    return request.then(response =>response.data)
}