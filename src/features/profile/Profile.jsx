import { useSelector } from 'react-redux'
import UserAccounts from '../../components/UserAccount'
import UserWelcome from './UserWelcome'
import { GetUserInfos } from './GetUserInfos'
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
  GetUserInfos()
  let content = ''

  const isLoading = useSelector(state => state.user.isLoading)
  content = isLoading ? (
    <div className="temp-div ">
      <h1>Loading...</h1>
    </div>
  ) : (
    <main className="main bg-dark">
      <UserWelcome />
      <UserAccounts />
    </main>
  )

  return content
}
export default Profile
