import { useDispatch } from 'react-redux'
import { logingSuccess } from './authSlice'

export const RefreshAuthState = () => {
  const dispatch = useDispatch()

  const token = localStorage.getItem('token')
  // keeps you logged in while refreshing
  if (token) {
    dispatch(logingSuccess(token))
  }
}
