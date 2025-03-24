import { AxiosResponse } from 'axios';
import api from './api';
import { DeepSeekResponse } from '@/types/DeepSeekResponse';

export class DeepSeekService {
  static async getResponse(message: String): Promise<AxiosResponse<DeepSeekResponse>> {
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
    return response;
  }
}