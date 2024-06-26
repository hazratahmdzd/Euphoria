import apiClient from ".";

export const getAllProducts = async () => {
    try {
        const response = await apiClient.get('/product');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}