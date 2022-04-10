import { io } from 'socket.io-client'

const ENDPOINT = 'http://localhost:4001'

let socket

export const initiateSocketConnection = () => {
  socket = io(ENDPOINT)
  console.log(`Connecting socket...`)
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...')
  if (socket) socket.disconnect()
}

export const listenForUpdatedGame = (callback) => {
  socket.on('UpdatedGame', data => {
      console.log(data)
      callback(data.game)
  })
}
