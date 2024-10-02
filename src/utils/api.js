import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tech-challenge-2-latest.onrender.com',
    proxy: {
        host: 'https://tech-challenge-2-latest.onrender.com',
    },
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
})

export default api;