/**
 * Component that extract the user infos thru the Api handler and update the state thru the state manager
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 *  GetUserInfos()
 * @returns Nothing returned but the state.user is updated
 *
 */

import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { userError, userFullName, userPending } from './userSlice'
import { getData } from '../../utils/apiHandler/internalApiHandler'

export const GetUserInfos = async () => {
  const dispatch = useDispatch()
  const { isRemember, token } = useSelector((state) => state.auth, shallowEqual)

  useEffect(() => {
    dispatch(userPending())
  }, [dispatch])
  try {
    const profile = await getData({}, 'profile', token)

    if (isRemember) {
      localStorage.setItem('firstName', profile.firstName)
      localStorage.setItem('lastName', profile.lastName)
    } else {
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
    }
    dispatch(userFullName(profile))
  } catch (error) {
    dispatch(userError(error.response.data.message))
  }
}
