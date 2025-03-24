import axios from 'axios';

const api = axios.create({baseURL:  import.meta.env.MODE == 'production' ? `${window.origin}/api` : '/api', withCredentials: true });

export default api;