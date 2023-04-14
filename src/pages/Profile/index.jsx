import '../../utils/style/_profile.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
  console.log('Profaile page opened')
  let pageName = 'Profile'
  const [count, setCount] = useState(5)
  const { user: currentUser } = useSelector((state) => state.auth)
  const { isLoggedIn } = useSelector((state) => state.auth)
  // const { isLoggedIn } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      const interval = setInterval(() => {
        setCount((seconds) => seconds - 1)
      }, 1000)
      count === 0 && navigate('/login')
      return () => clearInterval(interval)
    }
  }, [isLoggedIn, navigate, count])

  if (!isLoggedIn) {
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
    <div className="temp-div ">
      <p>{pageName} Page</p>
      <p>{currentUser ? 'Server response : ' + currentUser.message : ''}</p>
      <p>token : {currentUser?.body.token.slice(0, 12)}...</p>

      <p>Work in progress</p>
    </div>
  )
}
export default Profile
