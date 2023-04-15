import { useState, useEffect } from 'react'
import { getData } from '../auth/internalApiHandler'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import {
  logingPending,
  logingSuccess,
  logingError,
  logingRemember,
} from '../auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { RefreshAuthState } from '../auth/RefreshAuthState'
import '../../utils/style/_login.scss'
/**
 * Component that displays the Login page\
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
  RefreshAuthState()
  const { isAuth, isLoading, error, isRemember } = useSelector(
    (state) => state.auth,
    shallowEqual
  )

  const initialValues = {
    email: 'email',
    password: '**********',
  }

  const [credientials, setCredientials] = useState({
    email: '',
    password: '',
  })

  const [count, setCount] = useState(3)
  // const userRef = useRef()

  // Handles the direct access thru URL
  useEffect(() => {
    if (isAuth) {
      const interval = setInterval(() => {
        setCount((seconds) => seconds - 1)
      }, 1000)
      count === 0 && navigate('/profile')
      return () => clearInterval(interval)
    }
  }, [isAuth, navigate, count])

  function handelChange({ currentTarget }) {
    const { value, name } = currentTarget
    if (name) {
      setCredientials({
        ...credientials,
        [name]: value,
      })
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(logingPending())
    try {
      const isAuth = await getData(credientials, 'login')

      if (isRemember) {
        localStorage.setItem('token', isAuth.token)
      } else {
        localStorage.removeItem('token')
      }

      dispatch(logingSuccess(isAuth.token))

      navigate('/profile')
    } catch (error) {
      console.log(error)
      dispatch(logingError(error.response.data.message))
    }
  }

  if (isAuth) {
    return (
      <div className="temp-div ">
        <p>
          User already signed in.
          <br />
          No authentification required. Redirection in {count} sec.
        </p>
      </div>
    )
  }

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
              type="text"
              placeholder={initialValues.email}
              id="email"
              name="email"
              onChange={handelChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder={initialValues.password}
              id="password"
              name="password"
              onChange={handelChange}
              autoComplete="off"
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
  // }
}
export default Login
