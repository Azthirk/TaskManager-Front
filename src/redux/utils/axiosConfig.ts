import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL  || 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Response error', error.response.data);
    } else {
      console.error('Connection error', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
