import axios from 'axios';

const API_URL = 'https://api.example.com';

const api = axios.create({
    baseURL: API_URL,
});

// Interceptors, auth tokens, etc.
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
