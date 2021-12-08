import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

export const postCollage = (data: FormData, config?: AxiosRequestConfig) => {
    return axiosInstance.post('/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        ...config
    });
};

export const getStatus = (taskId: string, config?: AxiosRequestConfig) => axiosInstance.get(`/${taskId}`, config);