import axios from 'axios';

export const registerUser = (user) => {
    return axios.post('/register', {user});
}

export const signInUser = (user) => {
    return axios.post('/login', user);
}

export const getUser = (user) => {
    return axios.get(`/user`, {user});
}

export const logout = () => {
    return axios.get('/logout');
}

export const forgot = (email) => {
    return axios.post('/account/forgot', {email})
}

export const confirmedPasswords = (key, password) => {
    return axios.post(`account/reset/${key}`, {password})
}

