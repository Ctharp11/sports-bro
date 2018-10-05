import axios from 'axios';

export const registerUser = (user) => {
    return axios.post('/register', {user});
}

export const signInUser = (user) => {
    return axios.post('/login', user);
}

export const getUser = () => {
    return axios.get(`/user`);
}

