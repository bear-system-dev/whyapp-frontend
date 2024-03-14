// import { io } from 'socket.io-client'

// const userId = 'c48a0f3e-1671-4d56-965e-835ebfb52e64'
// const recipientId = '7501e6de-edd4-4316-862e-c6bb4f036a77'

// // // const sortByFirst = [userId, recipientId].sort()
// // export const chatId =
// //   '7501e6de-edd4-4316-862e-c6bb4f036a77c48a0f3e-1671-4d56-965e-835ebfb52e64'

// const sortByFirst = [userId, recipientId].sort()
// export const chatId = sortByFirst.join('')

// // export const socket = io(`${import.meta.env.VITE_APP_BASE_URL}:3000`)
// export const socket = io(`${import.meta.env.VITE_APP_BASE_URL}`, {
//   query: {
//     userId,
//     recipientId,
//   },
// })
