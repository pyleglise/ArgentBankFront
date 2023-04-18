/**
 * @file
 * File : store.js\
 * Store used by redux as a state management provider\
 * Defines the store
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name store
 */

// Imports__________________________________________

import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import userSlice from '../features/profile/userSlice'

// Sotre_______________________________________________
const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
})

export default store
