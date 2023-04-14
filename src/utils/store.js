import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/slices/auth'
import messageReducer from '../features/auth/slices/message'

const reducer = {
  auth: authReducer,
  message: messageReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store
