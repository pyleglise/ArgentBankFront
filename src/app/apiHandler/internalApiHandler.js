import axios from 'axios'
import { API_URL } from './internalAPIConfig'

/**
 * Function to set the axios header for authenfication using Bearer token
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * const token='5g4654efg6es541ZQD98rgtdsae6qzef1az6qre5thr1tydryrtRF4'
 * setAuthorization(token)
 * @param {string} token The authorization token to put in the header of the request
 * @return No return
 */
const setHeaders = (token) => {
  const localToken = localStorage.getItem('token')

  axios.defaults.headers.common['Authorization'] = `Bearer ${
    token || localToken || ''
  }`
  axios.defaults.headers.common['Content-Type'] = 'application/json'
}

/**
 * Function to get user data from the API
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * const credentials={email: 'bob@sponge.com', password:'It_is_so_wet!'}
 * cont apiFunction='login'
 * const token='5g4654efg6es541ZQD98rgtdsae6qzef1az6qre5thr1tydryrtRF4'
 * const data = await getData(credentials, apiFunction, token)
 * @param {Objet} credientials user's credentials - {} empty if using Authorization token
 * @param {String} credientials.email user's email
 * @param {String} credientials.password user's password
 * @param {string} apiFunction The api function to be call (will be concatenated at the end of the url)
 * @param {string} token The authorization token to put in the header of the request, if not using credentials
 * @returns {Promise<any>} Promise with user datas
 */
export async function getData(credientials, apiFunction, token) {
  setHeaders(token)
  // try {
  //   const response = await axios.post(API_URL + '/' + apiFunction, credientials)
  //   return response.data.body
  // } catch (error) {
  //   return error
  // }

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(API_URL + '/' + apiFunction, credientials)
      resolve(res.data.body)
    } catch (error) {
      reject(error)
    }
  })
}
/**
 * Function to update user data
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * const userFullName={firstName: 'Bob', lastName: 'Sponge'}
 * cont apiFunction='profile'
 * const token='5g4654efg6es541ZQD98rgtdsae6qzef1az6qre5thr1tydryrtRF4'
 * const data = await updateData(userFullName, apiFunction, token)
 * @param {Objet} userFullName New user's info to send to api
 * @param {String} userFullName.firstName User's new firstName
 * @param {String} userFullName.lastName User's new lastName
 * @param {string} apiFunction The api function to be call (will be concatenated at the end of the url)
 * @param {string} token The authorization token to put in the header of the request
 * @returns {Promise<any>} Promise with user's new data updated
 */
export async function updateData(userFullName, apiFunction, token) {
  setHeaders(token)

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
