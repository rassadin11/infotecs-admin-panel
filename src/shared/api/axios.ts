import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://697f4b24d1548030ab65a5a1.mockapi.io/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})
