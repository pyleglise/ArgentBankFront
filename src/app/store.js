/**
 * @file
 * File : store.js\
 * Store used by redux as a state management provider\
 * Defines the store
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name store
 */

import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiHandler/apiSlice'
import authSlice from '../features/auth/authSlice'
import userSlice from '../features/profile/userSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})
export default store
