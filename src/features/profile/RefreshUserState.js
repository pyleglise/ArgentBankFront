import { useDispatch } from 'react-redux'
import { userFullName } from './userSlice'

export const RefreshUserState = () => {
  const dispatch = useDispatch()
  const firstName = localStorage.getItem('firstName')
  const lastName = localStorage.getItem('lastName')
  // keeps your infos in while refreshing
  if (firstName && lastName) {
    const fullName = {
      firstName: firstName,
      lastName: lastName,
    }
    dispatch(userFullName(fullName))
    // dispatch(userLastName(lastName))
  }
  // firstName = useSelector((state) => state.user.firstName)
}
