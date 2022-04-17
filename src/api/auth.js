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

export const changePassword = (data, token) => {
  return axios({
    url: 'http://localhost:4741/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { passwords: data },
  })
}

export const signOut = (token) => {
  return axios({
    url: 'http://localhost:4741/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
