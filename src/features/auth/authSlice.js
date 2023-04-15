import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isAuth: false,
  isRemember: true,
  token: null,
  error: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logingPending: (state) => {
      state.isLoading = true
    },
    logingSuccess: (state, action) => {
      state.isLoading = false
      state.isAuth = true
      state.token = action.payload
      state.error = ''
    },
    logingError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    logingRemember: (state, action) => {
      state.isRemember = action.payload
    },
    logingOut: (state) => {
      state.isLoading = false
      state.isAuth = false
      state.token = null
    },
  },
})
const { actions, reducer } = authSlice
export const {
  logingPending,
  logingSuccess,
  logingError,
  logingOut,
  logingRemember,
} = actions
export default reducer
export const selectCurrentToken = (state) => state.auth.token
