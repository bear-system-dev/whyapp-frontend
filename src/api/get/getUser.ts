import { api } from '@/lib/api';
import { User } from '@/model/UserModel';
import Cookies from 'js-cookie';


export default async function getUser(): Promise<User[]> {
  try {
    const token = Cookies.get('token');

    if (!token) {
      console.log('não há token');
    }
    const response = await api.get<User[]>('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 999,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error);
    throw error;
  }
}
