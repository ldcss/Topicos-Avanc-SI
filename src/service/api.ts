import axios from 'axios';

const api = axios.create({baseURL:  import.meta.env.MODE == 'production' ? process.env.VITE_API_BASE_URL : '/api', withCredentials: true });

export default api;