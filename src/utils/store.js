import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/provider/auth/authSlice'
import userSlice from '../features/provider/profile/userSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
})

export default store
