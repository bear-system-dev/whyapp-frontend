import { FriendsPostProps } from '@/components/MenuInfo/components/ModalAlert';
import { api } from '@/lib/api';
import Cookies from 'js-cookie';


export default async function removeMembersGroup(
  groupId: string | undefined,
  members: FriendsPostProps[]
) {
  try {
    const token = Cookies.get('token');
    console.log(members);
    const response = await api.post('/groups/remove-members', members, {
      params: {
        groupId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error);
  }
}
