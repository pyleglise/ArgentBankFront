/**
 * @file
 * File : axios.js\
 * Defines defautl axios instance
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name axios
 */
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api/v1'

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})
