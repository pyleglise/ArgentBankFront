import '../../utils/style/_profile.scss'
import { shallowEqual, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GetUserInfos } from '../../features/profile/GetUserInfos'
import UserAccounts from '../../components/userAccounts'

// import { userSlice } from '../../features/profile/userSlice'

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
  const [count, setCount] = useState(5)
  const isAuth = useSelector((state) => state.auth.isAuth, shallowEqual)

  GetUserInfos()

  // const user = useSelector((state) => state.user)
  // console.log('user:')
  // console.log(user)
  const navigate = useNavigate()

  const firstName = useSelector((state) => state.user.firstName, shallowEqual)
  const lastName = useSelector((state) => state.user.lastName, shallowEqual)

  useEffect(() => {
    if (!isAuth) {
      const interval = setInterval(() => {
        setCount((seconds) => seconds - 1)
      }, 1000)
      count === 0 && navigate('/login')
      return () => clearInterval(interval)
    }
  }, [isAuth, navigate, count])

  if (!isAuth) {
    return (
      <div className="temp-div ">
        <p>
          User not signed in.
          <br />
          Authentification required. Redirection in {count} sec.
        </p>
      </div>
    )
  }

  return (
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
}
export default Profile
