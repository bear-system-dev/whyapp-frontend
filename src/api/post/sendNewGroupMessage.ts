import { api } from '@/lib/api';
import { GroupMessage } from '@/model/GroupMessageModel';
import Cookies from 'js-cookie';


export default async function sendNewGroupMessage({ mensagem, grupoId }: GroupMessage) {
  try {
    const usuarioId = Cookies.get('userId');
    const token = Cookies.get('token');

    const response = await api.post(
      '/group-messages',
      {
        mensagem,
        grupoId,
        usuarioId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error);
  }
}
