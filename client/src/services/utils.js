import axios from 'axios';

export const registerUser = (user) => {
//  console.log('user registering', user)
    return axios.post('/register', {user});
}