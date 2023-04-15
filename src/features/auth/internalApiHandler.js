import axios from 'axios'
// import { URL_LOGIN } from '../config'
const URL_LOGIN = 'http://localhost:3001/api/v1/user'
/**
 * Function to get user datas login
 * @param {Objet} credientials user's credentials
 * @param {String} credientials.email user's email
 * @param {String} credientials.password user's password
 * @returns {Promise<any>} Promise with user datas
 */

export async function getData(credientials, apiFunction) {
  const token = localStorage.getItem('token')
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete axios.defaults.headers.common['Authorization']
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL_LOGIN + '/' + apiFunction, credientials)
      // token = res.data.body.token

      resolve(res.data.body)
    } catch (error) {
      reject(error)
    }
  })
}
