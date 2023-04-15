import { useDispatch } from 'react-redux'
import { userFirstName, userLastName } from './userSlice'

export const RefreshUserState = () => {
  const dispatch = useDispatch()
  const firstName = localStorage.getItem('firstName')
  // keeps your infos in while refreshing
  if (firstName) {
    dispatch(userFirstName(localStorage.getItem('firstName')))
    dispatch(userLastName(localStorage.getItem('lastName')))
  }
  // firstName = useSelector((state) => state.user.firstName)
}
