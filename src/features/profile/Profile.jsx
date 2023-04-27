import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentToken } from '../auth/authSlice'
import { userPending, userFullName } from './userSlice'
import { useGetUserMutation } from './userApiSlice'
import UserAccounts from '../../components/UserAccount'
import UserWelcome from './UserWelcome'
import '../../utils/style/_profile.scss'

/**
 * Component/page that displays the Profile page
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <Profile />
 * }
 * @returns {JSX.Element}   A JSX.Element that displays the Profile Page
 *
 */
const Profile = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectCurrentToken)
  const isRemember = useSelector((state) => state.auth.isRemember)
  const userIsLoading = useSelector((state) => state.user.isLoading)

  const [getUser, { data, isLoading, isSuccess, isError, error }] =
    useGetUserMutation()

  useEffect(() => {
    dispatch(userPending())
    if (token) getUser(token).unwrap()
  }, [dispatch, getUser, token])

  useEffect(() => {
    if (isSuccess) dispatch(userFullName(data.body))
  }, [isSuccess, dispatch, data, userIsLoading])

  let content = ''

  if (isLoading) {
    content = (
      <div className="temp-div ">
        <h1>Loading...</h1>
      </div>
    )
  } else if (isSuccess) {
    if (isRemember) {
      localStorage.setItem('firstName', data.body.firstName)
      localStorage.setItem('lastName', data.body.lastName)
    } else {
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
    }

    content = (
      <main className="main bg-dark">
        <UserWelcome />
        <UserAccounts />
      </main>
    )
  } else if (isError) {
    content = (
      <div className="error">
        <p className="error-num">ERROR ! </p>
        <p className="error-txt">
          Oups!
          <br /> {error.data.message}
        </p>
        <p>
          <NavLink to="/">Back to home page</NavLink>
        </p>
      </div>
    )
  }

  return content
}
export default Profile
