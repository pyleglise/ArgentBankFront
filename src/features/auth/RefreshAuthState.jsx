import { useDispatch, useSelector } from 'react-redux'
import { logingSuccess, selectCurrentIsAuth } from './authSlice'

/**
 * Component that refresh the state.auth.token depending on the localstorage token status.\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 *  RefreshAuthState()
 * @returns {Boolean} Authorization status
 *
 */
export const RefreshAuthState = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const isAuth = useSelector(selectCurrentIsAuth)
  // keeps you logged in while refreshing
  if (token) {
    dispatch(logingSuccess(token))
  }
  return isAuth
}
