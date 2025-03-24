import axios from 'axios';

const api = axios.create({baseURL:  import.meta.env.MODE == 'production' ? 'https://welfarec.vercel.app/api' : '/api', withCredentials: true });

export default api;