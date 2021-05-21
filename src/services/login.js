import axios from 'axios'

export const login = async (credentials) =>{
    const response = await axios.post('http://challenge-react.alkemy.org/', credentials)
    return response
}
