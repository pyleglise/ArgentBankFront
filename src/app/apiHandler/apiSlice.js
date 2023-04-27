/**
 * @file
 * File : apiSlice.js\
 * It is used by RTK Query \
 * Defines Base query using axios instance
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name apiSlice
 */
import { createApi } from '@reduxjs/toolkit/query/react'
import axios from './axios'

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params, headers, withCredentials }) => {
    try {
      const result = await axios({
        url: url,
        method,
        data,
        params,
        headers,
        withCredentials,
      })

      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err,
        },
      }
    }
  }

export const apiSlice = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({}),
})
