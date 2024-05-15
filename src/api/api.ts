import axios from 'axios'
import removeFriend from './delete/removeFriend'
import getGroupMessage from './get/getGroupMessage'
import getMyProfileInfo from './get/getMyProfileInfo'
import getUser from './get/getUser'
import getFriendsList from './get/getUserFriends'
import getUserGroups from './get/getUserGroups'
import addFriend from './post/addFriend'
import createGroup from './post/createGroup'
import newFriendGroup from './post/newFriendGroup'
import removeMembersGroup from './post/removeMembersGroup'
import sendNewGroupMessage from './post/sendNewGroupMessage'
import updateMyPassword from './post/updateMyPassword'
import updateMyProfileInfo from './post/updateMyProfileInfo'

axios.defaults.withCredentials = true

export const apiFunction = {
  getUser,
  getMyProfileInfo,
  getFriendsList,
  updateMyProfileInfo,
  addFriend,
  removeFriend,
  updateMyPassword,
  createGroup,
  getUserGroups,
  sendNewGroupMessage,
  getGroupMessage,
  newFriendGroup,
  removeMembersGroup,
}
