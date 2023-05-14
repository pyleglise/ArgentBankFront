import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLoginMutation } from './authApiSlice'
import {
  logingPending,
  logingSuccess,
  logingError,
  logingRemember,
} from './authSlice'
import { RefreshAuthState } from './RefreshAuthState'
import '../../utils/style/_login.scss'

/**
 * Component that displays the Login page and set the authorization.\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <Login />
 * }
 * @returns {JSX.Element}   A JSX.Element that displays the Login Page
 *
 */
const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let content = ''
  const [login] = useLoginMutation()
  const { isAuth, isLoading, error, isRemember, token } = useSelector(
    (state) => state.auth
  )

  const [credentials, setCredientials] = useState({
    email: '',
    password: '',
  })

  const [count, setCount] = useState(3)
  if (isAuth && isRemember && token !== localStorage.getItem('token')) {
    RefreshAuthState()
  }

  // Clear error message if new user input
  useEffect(() => {
    dispatch(logingError(''))
  }, [dispatch, credentials])

  // Handles user input
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget
    if (name) {
      setCredientials({
        ...credentials,
        [name]: value,
      })
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(logingPending())
    try {
      const userData = await login(credentials).unwrap()
      dispatch(logingSuccess(userData.body.token))
      isRemember
        ? localStorage.setItem('token', userData.body.token)
        : localStorage.removeItem('token')
      navigate('/profile')
    } catch (error) {
      dispatch(logingError(error.data.message))
    }
  }

  // Handles the direct access thru URL for user already logged in
  useEffect(() => {
    if (isAuth) {
      const interval = setInterval(() => {
        setCount((seconds) => seconds - 1)
      }, 1000)
      count === 0 && navigate('/profile')
      return () => clearInterval(interval)
    }
  }, [isAuth, navigate, count])

  if (isAuth) {
    return (
      <div className="temp-div home-div">
        <p>
          User already signed in.
          <br />
          No authentification required. Redirection in {count} sec.
        </p>
      </div>
    )
  }

  // Handles the standard profile page
  content = isLoading ? (
    <div className="temp-div ">
      <h1>Loading...</h1>
    </div>
  ) : (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        {error && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email@somedomain.ext"
              id="email"
              name="email"
              onChange={handleChange}
              autoComplete="false"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="***********"
              id="password"
              name="password"
              onChange={handleChange}
              autoComplete="false"
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              defaultChecked={isRemember}
              onChange={() => dispatch(logingRemember(!isRemember))}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" disabled={isLoading}>
            {isLoading && (
              <span className="spinner-border spinner-border-sm">Loading</span>
            )}
            <span>Sign In</span>
          </button>
        </form>
      </section>
    </main>
  )

  return content
}
export default Login
