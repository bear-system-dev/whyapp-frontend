import axios from 'axios'
import getUser from './get/getUser'
import getMyProfileInfo from './get/getMyProfileInfo'
import updateMyProfileInfo from './post/updateMyProfileInfo'
import removeFriend from './delete/removeFriend'
import addFriend from './post/addFriend'
import updateMyPassword from './post/updateMyPassword'
import getUserGroups from './get/getUserGroups'
import createGroup from './post/createGroup'
import getGroupMessage from './get/getGroupMessage'
import newFriendGroup from './post/newFriendGroup'
import sendNewGroupMessage from './post/sendNewGroupMessage'
import removeMembersGroup from './post/removeMembersGroup'

axios.defaults.withCredentials = true

export const apiFunction = {
  getUser,
  getMyProfileInfo,
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
