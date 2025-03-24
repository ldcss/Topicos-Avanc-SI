import { AxiosResponse } from 'axios';
import api from './api';
import { DeepSeekResponse } from '@/types/DeepSeekResponse';

export class DeepSeekService {
  static async getResponse(message: String): Promise<AxiosResponse<DeepSeekResponse>> {
    console.log('ambiente', process.env.NODE_ENV)
    console.log('apiKey', import.meta.env.VITE_API_KEY)
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      'Content-Type': 'application/json',
    };
    const response = await api.post('/v1/chat/completions', {
      model: 'deepseek/deepseek-chat:free',
      messages: [{ role: 'user', content: message }]
    }, {
      headers: headers
    })
    console.log('baseUrl', response.config.baseURL)
    console.log('url', response.config.url)
    return response;
  }
}