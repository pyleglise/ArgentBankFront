import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../utils/context'
import { useNavigate } from 'react-router-dom'
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDataLoading, setDataLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const { login, logout } = useContext(UserContext)
  const history = useNavigate()
  const Auth = async (e) => {
    e.preventDefault()
    try {
      setDataLoading(true)
      await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      })
      // console.log('identifiant_utilisateur='+identifiant_utilisateur)
      login(email)
      // console.log('user='+user.name);
      setDataLoading(false)
      history('/profile')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
        logout()
        setDataLoading(false)
      }
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={Auth}>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="*******"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}
export default Login
