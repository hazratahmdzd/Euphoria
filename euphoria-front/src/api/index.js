import axios from 'axios';

// const apiClient = axios.create({
//     baseURL: 'https://euphoria-ecommerce.onrender.com/api',
// });

const baseURL = 'euphoria-ecommerce.onrender.com/api'

export const axiosFunction = async ( method, endpoint, data ) => {

    try {
        const response = await axios({
            method,
            url: `https://${baseURL}${endpoint}`,
            data: data && data
        });
        return response.data;
    } catch(err) {
        console.log(err.message)
    }
}


// export default apiClient;