import { api } from '@/lib/api';
import Cookies from 'js-cookie';


export default async function removeFriend(userId: string, friendId: string) {
  try {
    const token = Cookies.get('token');

    const response = await api.delete('/user/amigos', {
      params: {
        userId,
        friendId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error('Algo saiu mal na requisição: ', error);
  }
}
