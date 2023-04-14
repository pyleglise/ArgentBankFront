import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/'

const register = (email, password) => {
  return axios.post(API_URL + 'signup', {
    email,
    password,
  })
}

const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then((response) => {
      // console.log(response)
      if (response.data.body.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout,
}

export default authService
