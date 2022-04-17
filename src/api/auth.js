import axios from 'axios'

export const signUp = (data) => {
  return axios({
    url: `http://localhost:4741/sign-up`,
    method: 'POST',
    data: { credentials: data },
  })
}

export const signIn = (data) => {
  return axios({
    url: `http://localhost:4741/sign-in`,
    method: 'POST',
    data: { credentials: data },
  })
}
