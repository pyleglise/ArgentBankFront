import { createApi } from '@reduxjs/toolkit/query/react'
import axios from './axios'
// import { logingSuccess, logingOut } from '../../features/auth/authSlice'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    console.log(' axiosBaseQuery')
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      console.log('Result : ')
      console.log(result)
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return err
      // error: {
      //   status: err.response?.status,
      //   data: err.response?.data || err.message,
      // },
    }
  }

export const apiSlice = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({}),
})
