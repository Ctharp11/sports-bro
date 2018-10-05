import axios from 'axios';

export const registerUser = (user) => {
    return axios.post('/register', {user});
}