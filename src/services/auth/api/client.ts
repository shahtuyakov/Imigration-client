import axios from 'axios';

const api = axios.create({
  baseURL: 'YOUR_API_URL',
  timeout: 10000,
});

api.interceptors.request.use(
  config => {
    const token = null; // Get from secure storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

export default api;