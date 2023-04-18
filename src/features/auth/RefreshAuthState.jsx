import { useDispatch } from 'react-redux'
import { logingSuccess } from './authSlice'

/**
 * Component that refresh the state.auth.token depending on the localstorage token status.\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 *  RefreshAuthState()
 * @returns Nothing returned but the state.auth is updated.
 *
 */
export const RefreshAuthState = () => {
  const dispatch = useDispatch()

  const token = localStorage.getItem('token')
  // keeps you logged in while refreshing
  if (token) {
    dispatch(logingSuccess(token))
  }
}
