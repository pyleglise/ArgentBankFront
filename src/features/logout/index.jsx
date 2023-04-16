import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logingOut, logingPending } from '../auth/authSlice'
import { userPending, userQuit } from '../profile/userSlice'
import '../../utils/style/_global.scss'

const Logout = () => {
  const [count, setCount] = useState(3)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.auth.isAuth)
  // console.log('Logged in : ' + isAuth)

  const signOut = () => {
    if (isAuth) {
      dispatch(logingPending())
      dispatch(userPending())
      dispatch(logingOut())
      dispatch(userQuit())
      localStorage.removeItem('token')
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
    }
  }

  useEffect(() => {
    if (!isAuth) {
      const interval = setInterval(() => {
        setCount((seconds) => seconds - 1)
      }, 1000)
      count === 0 && navigate('/')
      return () => clearInterval(interval)
    }
  }, [isAuth, navigate, count])

  if (!isAuth) {
    return (
      <div className="temp-div home-div">
        <p>
          User already logged out.
          <br />
          Redirection in {count} sec.
        </p>
      </div>
    )
  }

  return (
    <div className="temp-div home-div">
      <p>Are you sure you want to sign out ?</p>
      <Link className="main-nav-item" onClick={() => signOut()} to="/">
        <button className="edit-button">
          <i className="fa-solid fa-arrow-right-from-bracket" /> Sign Out
        </button>
      </Link>
      <Link className="main-nav-item" to={-1}>
        <button className="edit-button">
          <i className="fa-solid fa-arrow-left" /> No ! Go back
        </button>
      </Link>
    </div>
  )
}
export default Logout
