import axios from 'axios'
import { API_URL } from './internalAPIConfig'

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
      const res = await axios.post(API_URL + '/' + apiFunction, credientials)
      resolve(res.data.body)
    } catch (error) {
      reject(error)
    }
  })
}
export async function updateData(userFullName, apiFunction) {
  const token = localStorage.getItem('token')
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete axios.defaults.headers.common['Authorization']
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(API_URL + '/' + apiFunction, userFullName)
      resolve({
        firstName: res.data.body.firstName,
        lastName: res.data.body.lastName,
      })
    } catch (error) {
      reject(error)
    }
  })
}
