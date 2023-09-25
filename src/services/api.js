import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-4k5p.onrender.com',
})
