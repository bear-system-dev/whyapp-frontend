import { api } from '@/lib/api';
import Cookies from 'js-cookie';


export default async function addFriend(userId: string, friendId: string) {
  try {
    const token = Cookies.get('token');

    const response = await api.post(
      '/user/amigos',
      {},
      {
        params: {
          userId,
          friendId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error('Algo saiu mal na requisição: ', error);
  }
}
