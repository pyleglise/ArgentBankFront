import { useDispatch, useSelector } from 'react-redux'
import { logingPending, logingSuccess, selectCurrentToken } from './authSlice'
import { userFirstName, userPending } from '../profile/userSlice'

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
  const localToken = localStorage.getItem('token')
  const localStorageFirstName = localStorage.getItem('firstName')
  const token = useSelector(selectCurrentToken)
  // keeps you logged in while refreshing
  if (localToken && !token) {
    dispatch(logingPending())
    dispatch(logingSuccess(localToken))
    if (localStorageFirstName) {
      dispatch(userPending())
      dispatch(userFirstName(localStorageFirstName))
    }
  }
}
