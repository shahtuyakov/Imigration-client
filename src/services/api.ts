import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'YOUR_API_URL';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken });
          await AsyncStorage.setItem('token', response.data.token);
          error.config.headers.Authorization = `Bearer ${response.data.token}`;
          return axios(error.config);
        } catch (e) {
          await AsyncStorage.multiRemove(['token', 'refreshToken']);
          // Redirect to login
        }
      }
    }
    return Promise.reject(error);
  }
);

// src/services/auth.ts
export const authService = {
  login: (credentials: any) => api.post('/auth/login', credentials),
  googleLogin: (token: any) => api.post('/auth/google', { token }),
  appleLogin: (token: any) => api.post('/auth/apple', { token }),
  logout: () => api.post('/auth/logout'),
};

// src/services/case.ts
export const caseService = {
  getCases: () => api.get('/cases'),
  getCase: (id: any) => api.get(`/cases/${id}`),
  trackUSCIS: (receiptNumber: any) => api.post('/cases/track', { receiptNumber }),
};

// src/services/news.ts
export const newsService = {
  getNews: (params: any) => api.get('/news', { params }),
  getCategories: () => api.get('/news/categories'),
  getArticle: (id: any) => api.get(`/news/${id}`),
};

// src/services/lawyer.ts
export const lawyerService = {
  getLawyers: (params: any) => api.get('/lawyers', { params }),
  getLawyer: (id: any) => api.get(`/lawyers/${id}`),
  bookAppointment: (lawyerId: any, data: any) => api.post(`/lawyers/${lawyerId}/book`, data),
};
