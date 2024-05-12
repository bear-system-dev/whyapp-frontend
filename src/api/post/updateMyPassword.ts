import { api } from '@/lib/api';
import { User, UserResponse } from '@/model/UserModel';
import Cookies from 'js-cookie';


export default async function updateMyPassword({ senha }: Partial<User>): Promise<User> {
  try {
    const userId = Cookies.get('userId');

    const response = await api.post<UserResponse>(`/user/update/${userId}`, {
      senha,
    });
    return response.data.user;
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error);
    throw error;
  }
}
