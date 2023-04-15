import axios from 'axios'
import { getData } from '../auth/internalApiHandler'
import { useDispatch, useSelector } from 'react-redux'
import {
  userPending,
  userFirstName,
  userLastName,
  userError,
} from './userSlice'

export const GetUserInfos = async () => {
  const dispatch = useDispatch()
  const { isRemember } = useSelector((state) => state.auth)
  const token = localStorage.getItem('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  dispatch(userPending())
  try {
    const profile = await getData({}, 'profile')
    dispatch(userFirstName(profile.firstName))
    dispatch(userLastName(profile.lastName))
    if (isRemember) {
      localStorage.setItem('firstName', profile.firstName)
      localStorage.setItem('lastName', profile.lastName)
    } else {
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
    }
  } catch (error) {
    console.log(error)
    dispatch(userError(error.response.data.message))
  }
}
