import { api } from '@/lib/api';
import { User, UserResponse } from '@/model/UserModel';
import Cookies from 'js-cookie';


export default async function updateMyProfileInfo({
  avatar, nome, descricao,
}: Partial<User>): Promise<User> {
  try {
    const token = Cookies.get('token');
    const userId = Cookies.get('userId');

    if (!token) {
      console.log('não há token');
    }

    const response = await api.post<UserResponse>(
      `/user/update/${userId}`,
      { avatar, nome, descricao },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.user;
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error);
    throw error;
  }
}
