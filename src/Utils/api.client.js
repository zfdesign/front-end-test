import axios from 'axios'

const apiClient = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    "Accept": 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getDraftLabel() {
    return apiClient.get('/draft-label')
  }
}