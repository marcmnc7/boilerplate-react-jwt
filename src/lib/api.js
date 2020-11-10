import axios from 'axios'

const { 
  REACT_APP_REFRESH_TOKEN_API_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_URL,
} = process.env

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "x-api-key": REACT_APP_API_KEY
  }
})

instance.interceptors.response.use(response => response, async error => {
  if (error.response.status === 401) {
    if (error.config.url !== REACT_APP_REFRESH_TOKEN_API_URL) {
      await instance.get(REACT_APP_REFRESH_TOKEN_API_URL)
      return await instance.request(error.config)
    } else {
      return Promise.reject(new Error('REFRESH_TOKEN_EXPIRED'))
    }
  }
  return Promise.reject(error)
})


export default {
  async get (endpoint) {
    const { data } = await instance.get(endpoint)
    return data
  },

  async post (endpoint, body) {
    const { data } = await instance.post(endpoint, body)
    return data
  }
}