import { getData } from '../../apiHandler/internalApiHandler'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { userError, userFullName, userPending } from './userSlice'
import { useEffect } from 'react'

export const GetUserInfos = async () => {
  const dispatch = useDispatch()
  const { isRemember } = useSelector((state) => state.auth, shallowEqual)

  useEffect(() => {
    dispatch(userPending())
  }, [dispatch])
  try {
    const profile = await getData({}, 'profile')

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
