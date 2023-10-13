/**
 * @file
 * File : userSlice.js\
 * It is used by redux as a state management provider\
 * Defines the user profile slices
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name userSlice
 */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  firstName: '',
  lastName: '',
  error: null,
}

const userSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    userPending: (state) => {
      state.isLoading = true
    },
    userFirstName: (state, action) => {
      state.isLoading = false
      state.firstName = action.payload
      state.error = null
    },
    userLastName: (state, action) => {
      state.isLoading = false
      state.lastName = action.payload
      state.error = null
    },
    userFullName: (state, action) => {
      state.isLoading = false
      state.lastName = action.payload.lastName
      state.firstName = action.payload.firstName
      state.error = null
    },
    userError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    userQuit: (state) => {
      state.isLoading = false
      state.firstName = ''
      state.lastName = ''
      state.error = null
    },
  },
})
const { actions, reducer } = userSlice
export const {
  userPending,
  userFirstName,
  userLastName,
  userFullName,
  userError,
  userQuit,
} = actions
export default reducer

export const selectUserFirstName = (state) => state.user.firstName
