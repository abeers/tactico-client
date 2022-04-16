import axios from 'axios'

export const newGame = () => {
  return axios({
    url: `http://localhost:4741/games`,
    method: 'POST',
  })
}

export const updateGame = (data, id) => {
  return axios({
    url: `http://localhost:4741/games/${id}`,
    method: 'PATCH',
    data: data,
  })
}
