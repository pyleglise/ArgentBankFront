import '../../utils/style/_profile.scss'
import { useSelector } from 'react-redux'
import UserAccounts from '../../components/userAccounts'
import { GetUserInfos } from '../../features/profile/GetUserInfos'

/**
 * Component that displays the Profile page\
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
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const isLoading = useSelector((state) => state.user.isLoading)
  content = isLoading ? (
    <div className="temp-div ">
      <h1>Loading...</h1>
    </div>
  ) : (
    <main className="main bg-dark">
      {true ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent">
            <div className="headerUserContentSave">
              <input
                className="InputfirstName"
                type="text"
                placeholder={firstName}
                name="firstName"
                onChange=""
                required
              />
              <button className="edit-button" type="submit">
                Save
              </button>
            </div>
            <div className="headerUserContentCancel">
              <input
                className="inputLastName"
                type="text"
                placeholder={lastName}
                name="lastName"
                onChange="void()"
                required
              />
              <button className="edit-button">Cancel</button>
            </div>
          </form>
        </div>
      )}
      <UserAccounts />
    </main>
  )
  return content
}
export default Profile
