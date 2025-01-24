import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://kurokami.vercel.app/api',
  timeout: 10000,
});

export default axiosInstance;
