import { api } from '@/lib/api';
import { Group } from '@/model/GroupModel';
import Cookies from 'js-cookie';


export default async function createGroup({ nome, foto, descricao }: Partial<Group>) {
  try {
    const userId = Cookies.get('userId');
    const token = Cookies.get('token');

    const response = await api.post(
      '/groups',
      {
        nome,
        foto,
        descricao,
        proprietarioId: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error);
  }
}
