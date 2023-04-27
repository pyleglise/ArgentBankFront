/**
 * @file
 * File : userApiSlice.js\
 * It is used by redux as a state management provider\
 * Defines the user profile api endpoints
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name userApiSlice
 */
import { apiSlice } from '../../app/apiHandler/apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (token) => ({
        url: '/user/profile',
        method: 'post',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }),
    }),
    setUser: builder.mutation({
      query: ({ token, userFullName }) => ({
        url: '/user/profile',
        method: 'put',
        data: userFullName,
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }),
    }),
  }),
})

export const { useGetUserMutation, useSetUserMutation } = userApiSlice
