import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { UserContext } from '../../utils/context'
import { useNavigate } from 'react-router-dom'
import { login } from '../../features/auth/slices/auth'
import { clearMessage } from '../../features/auth/slices/message'
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
  let content = ''
  const navigate = useNavigate()
  const [count, setCount] = useState(3)
  const userRef = useRef()
  // const errRef = useRef()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [errMsg, setErrMsg] = useState('')
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  useEffect(() => {
    if (userRef.current) userRef.current.focus()
  }, [])

  // useEffect(() => {
  //   setErrMsg('')
  // }, [email, password])

  const initialValues = {
    email: 'email',
    password: '**********',
  }
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        setLoading(false)
        navigate('/profile')
      })
      .catch(() => {
        setLoading(false)
        // message.current.focus()
      })
  }
  console.log('isLoggedIn=' + isLoggedIn)
  useEffect(() => {
    if (isLoggedIn) {
      const interval = setInterval(() => {
        setCount((seconds) => seconds - 1)
      }, 1000)
      count === 0 && navigate('/profile')
      return () => clearInterval(interval)
    }
  }, [isLoggedIn, navigate, count])

  if (isLoggedIn) {
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

  // useEffect(() => {
  //   const retour = () => {
  //     if (isLoggedIn) {
  //       setTimeout(() => {
  //         navigate('/profile')
  //       }, 5000)
  //       return (
  //         <div className="temp-div ">
  //           <p>
  //             User already signed in.
  //             <br />
  //             No authentification required. Redirection in 5 sec.
  //           </p>
  //         </div>
  //       )
  //     }
  //   }
  //   return retour
  // }, [isLoggedIn, navigate])

  content = loading ? (
    <div className="temp-div ">
      <h1>Loading...</h1>
    </div>
  ) : (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder={initialValues.email}
              id="email"
              value={email}
              onChange={handleEmail}
              ref={userRef}
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
              value={password}
              onChange={handlePassword}
              autoComplete="off"
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm">Loading</span>
            )}
            <span>Sign In</span>
          </button>
        </form>
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
      </section>
    </main>
  )
  return content
  // }
}
export default Login
