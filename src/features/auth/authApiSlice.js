/**
 * @file
 * File : authApiSlice.js\
 * It is used by redux as a state management provider\
 * Defines the authorization profile api endpoints
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name authApiSlice
 */
import { apiSlice } from '../../app/apiHandler/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'post',
        data: { ...credentials },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApiSlice
