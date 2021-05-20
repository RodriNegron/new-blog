import axios from 'axios'

export const login = async ({email,password}) =>{
    const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts', {email,password})
    return data
}
