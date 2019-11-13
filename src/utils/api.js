import axios from 'axios';

const client = axios.create({
    // baseURL: 'https://imedit.herokuapp.com'
    baseURL: 'http://localhost:3000'
});


export const getToken = async ({ email, password }) => {
    return client.post(
        '/api/v1/token',
        { email, password }
    );
}

export const createAccount = async ({ nickname, email, password }) => {
    return client.post(
        '/api/v1/accounts',
        { nickname, email, password }
    );
}

export const getImages = async ({ token }) => {
    return client.get('/api/images', {
        headers: {
            authorization: `JWT ${token}`
        }
    })
}