import axios from 'axios'

export const jsonplaceholderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})