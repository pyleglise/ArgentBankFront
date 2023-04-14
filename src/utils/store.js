import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/services/authSlice'
// import profileReducer from '../src/pages/profilePage/profileSlice'

const store = configureStore({
  reducer: {
    login: authSlice,
    // profile: profileReducer,
  },
})

export default store
