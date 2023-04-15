import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  firstName: '',
  lastName: '',
  error: '',
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
      state.error = ''
    },
    userLastName: (state, action) => {
      state.isLoading = false
      state.lastName = action.payload
      state.error = ''
    },
    userError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    userQuit: (state) => {
      state.isLoading = false
      state.firstName = ''
      state.lastName = ''
      state.error = ''
    },
  },
})
const { actions, reducer } = userSlice
export const { userPending, userFirstName, userLastName, userError, userQuit } =
  actions
export default reducer
