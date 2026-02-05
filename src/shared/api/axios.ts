import axios from 'axios'

export const api = axios.create({
  // в реальной жизни URL должен быть в .env файле, но т.к. проект тестовый оставлю так
  baseURL: 'https://697f4b24d1548030ab65a5a1.mockapi.io/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})
