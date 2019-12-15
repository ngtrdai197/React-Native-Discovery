import axios from 'axios'

export const api = axios.create({
  baseURL: `https://api.weatherbit.io/v2.0`,
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (!error.response) return // check network
    const statusCode = error.response.status
    if (statusCode === 401 || statusCode === 403) {
      // handle is here or redirect to login page
      return
    }
  },
)
