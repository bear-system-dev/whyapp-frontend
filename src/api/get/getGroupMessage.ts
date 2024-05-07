import { api } from '@/lib/api';
import { GroupMessage } from '@/model/GroupMessageModel';
import Cookies from 'js-cookie';


export default async function getGroupMessage({ grupoId }: GroupMessage) {
  try {
    const token = Cookies.get('token');

    const response = await api.get(`/group-messages/${grupoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 999,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error);
  }
}
