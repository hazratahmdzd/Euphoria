import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://euphoria-ecommerce.onrender.com/api',
    headers: {
        'content-type': 'application/json'
    }
});

export default apiClient;