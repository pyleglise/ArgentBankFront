import axios from 'axios'
import authHeader from '../auth/services/auth.header'

const API_URL = 'http://localhost:3001/api/v1/user/'

const getUserProfile = () => {
  return axios.get(API_URL + 'profile', { headers: authHeader() })
}

const userService = {
  getUserProfile,
}

export default userService
